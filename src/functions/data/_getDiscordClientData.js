const baseChoices = {
    discordStable: "https://discord.com",
    discordPtb: "https://ptb.discord.com",
    discordCanary: "https://canary.discord.com"
};

const urlChoices = {
    discordClientStable: baseChoices.discordStable + "/channels/@me",
    discordClientPtb: baseChoices.discordPtb + "/channels/@me",
    discordClientCanary: baseChoices.discordCanary + "/channels/@me",
};

const { readdirSync, unlinkSync, readFileSync, writeFileSync } = require("fs");
const prettier = require("prettier");
const puppeteer = require('puppeteer');
const { $Console, $Console_Prefix, $Console_Progress } = require("../utils/$Console");

const Errors = require("../utils/Errors.json");

const { _getFile, download } = require("./_getFile");

/**
 * @param {keyof urlChoices} url
 * 
 * @returns {Promise<_getDiscordClientData>} [build, scripts, styles]
 */
function _getDiscordClientData(url) {
    if (urlChoices[url]) {
        _getFile(urlChoices[url]).then(async file => {
            const html = file.toString();

            const Url = new URL(urlChoices[url]);

            /* ------------------------- */

            /**
             * @readonly
             * @param {Object} build Build informations.
             * @param {string?} build.release Release channel.
             * @param {string?} build.id Release identifier.
             */
            const build = {};

            const matchGlobalEnv = html.match(/<script nonce="[^"]+">window.GLOBAL_ENV = (.*?);<\/script>/s);
            const GlobalEnv = matchGlobalEnv ? new Function(`return ${matchGlobalEnv[1]}`)() : null;

            build.release = GlobalEnv ? GlobalEnv.RELEASE_CHANNEL : null;
            build.id = GlobalEnv ? GlobalEnv.SENTRY_TAGS.buildId : null;

            if (GlobalEnv.HTML_TIMESTAMP) GlobalEnv.HTML_TIMESTAMP = 'return Date.now();';

            writeFileSync("./save/globalEnv.json", JSON.stringify(GlobalEnv, null, 4));

            /* ------------------------- */

            /**
             * @readonly
             * @param {Array} scripts List of all scripts.
             */
            const scripts = [];
            let oldScripts = readdirSync("./save/scripts");
            let matchScript = html.match(/<script[^>]*src=["'](.*?)["']/g);

            console.log(matchScript.length, 'scripts found');

            if (matchScript) {
                $Console({ type: "log" }, $Console_Prefix.Data, { text: "Starting getting scripts...", colors: ["TxtGreen"] });
                $Console_Progress(0, matchScript.length, { done: ["TxtGreen"] });
                let i = 0;
                for (const script of matchScript) {
                    const matchSrc = script.match(/src=["'](.*?)["']/);
                    const src = Url.protocol + "//" + Url.hostname + matchSrc[1];
                    scripts.push(src);
                    i++;
                    const fileName = discordDataName(matchSrc[1]);
                    if (oldScripts.includes(fileName)) oldScripts = oldScripts.filter(e => e !== fileName);
                    downloadDiscordFile({ folder: "scripts", fileName }, src)
                        .then(async () => {
                            const content = readFileSync(`./save/scripts/${fileName}`).toString();
                            const formatted = await prettier.format(content, {
                                printWidth: 80, // The line length where Prettier will try wrap
                                tabWidth: 2, // Number of spaces per indentation level
                                useTabs: false, // Whether to use tabs for indentation
                                semi: true, // Whether to add a semicolon at the end of every line
                                singleQuote: false, // If true, replaces double quotes with single quotes
                                trailingComma: 'es5', // Adds a trailing comma where possible. Other options: 'none', 'all'
                                bracketSpacing: true, // Whether to add spaces between brackets and object literals
                                jsxBracketSameLine: false, // If true, puts the closing bracket of a JSX element at the end of the last line instead of being alone on the next line
                                arrowParens: 'avoid', // If 'always', include parentheses around a sole arrow function parameter. 'avoid' does not include parentheses
                                parser: 'babel' // Specifies the parser to be used
                            }).catch(() => content);

                            writeFileSync(`./save/scripts/${fileName}`, formatted);
                        })
                        .then($Console_Progress(i, matchScript.length, { done: ["TxtGreen"] }));
                };
            } else {
                $Console({ type: "warn" }, $Console_Prefix.Data, { text: "No scripts were found!" });
            };

            const browser = await puppeteer.launch();
            const page = await browser.newPage();

            await page.goto('https://canary.discord.com/channels/@me');

            let fetching;
            let done = false;

            page.on('request', async request => {
                let url = request.url();

                if (url.endsWith('.js')) {
                    let file = url.split('/').pop();

                    console.log('Found script', file);

                    const content = await fetch(url).catch(() => null).then(res => res.text());

                    if (content) {
                        let formatted = await prettier.format(content, {
                            printWidth: 80, // The line length where Prettier will try wrap
                            tabWidth: 2, // Number of spaces per indentation level
                            useTabs: false, // Whether to use tabs for indentation
                            semi: true, // Whether to add a semicolon at the end of every line
                            singleQuote: false, // If true, replaces double quotes with single quotes
                            trailingComma: 'es5', // Adds a trailing comma where possible. Other options: 'none', 'all'
                            bracketSpacing: true, // Whether to add spaces between brackets and object literals
                            jsxBracketSameLine: false, // If true, puts the closing bracket of a JSX element at the end of the last line instead of being alone on the next line
                            arrowParens: 'avoid', // If 'always', include parentheses around a sole arrow function parameter. 'avoid' does not include parentheses
                            parser: 'babel' // Specifies the parser to be used
                        }).catch(() => content);

                        let chunk = formatted.match(/\(this\.webpackChunkdiscord_app = this\.webpackChunkdiscord_app \|\| \[\]\)\.push\(\[\s*\["(\d+)"\],/)?.[1];

                        if (chunk) {
                            console.log('Saving chunk', chunk);

                            let fileName = `${chunk}.js`;

                            if (oldScripts.includes(fileName)) oldScripts = oldScripts.filter(e => e !== fileName);

                            writeFileSync(`./save/scripts/${fileName}`, formatted);

                            if (done && fetching === chunk) {
                                await browser.close();

                                for (const script of oldScripts) {
                                    $Console({ type: "log" }, $Console_Prefix.Data, { text: `Removing old script ${script}...`, colors: ["TxtYellow"] });
                                    unlinkSync(`./save/scripts/${script}`);
                                };
                            };
                        };
                    };
                };
            });
            page.on('console', async msg => {
                let message = '';

                for (let i = 0; i < msg.args().length; ++i) {
                    message += `${msg.args()[i].toString().replace('JSHandle:', '')} `;
                };

                message = message.trim();

                console.log(message);

                if (message.startsWith('Fetching')) fetching = message.split(' ')[1];
                else if (message === 'Done') done = true;
            });

            page.evaluate(() => {
                (async () => {
                    let r;

                    webpackChunkdiscord_app.push([[Symbol()], {}, e => r = e]);

                    for (let i = 0; i < 100000; i++) {
                        if (r.u(i)) try {
                            console.log('Fetching', i);

                            await r.e(i);
                        } catch { }
                    };

                    console.log('Done');
                })();
            }).then(console.log);

            /* ------------------------- */

            /**
             * @readonly
             * @param {Array} styles List of all styles.
             */
            const styles = [];
            let oldStyles = readdirSync("./save/styles");

            const matchStyle = html.match(/<link\s+[^>]*rel=["']stylesheet["']/g);
            if (matchStyle) {
                $Console({ type: "log" }, $Console_Prefix.Data, { text: "Starting getting styles...", colors: ["TxtGreen"] });
                $Console_Progress(0, matchStyle.length, { done: ["TxtGreen"] });
                let i = 0;
                for (const style of matchStyle) {
                    const matchHref = style.match(/href=["'](.*?)["']/);
                    const href = Url.protocol + "//" + Url.hostname + matchHref[1];
                    styles.push(href);
                    i++;
                    const fileName = discordDataName(matchHref[1]);
                    if (oldStyles.includes(fileName)) oldStyles = oldStyles.filter(e => e !== fileName);
                    downloadDiscordFile({ folder: "styles", fileName }, href)
                        .then(async () => {
                            const content = readFileSync(`./save/styles/${fileName}`).toString();
                            const formatted = await prettier.format(content, {
                                printWidth: 80, // The line length where Prettier will try wrap
                                tabWidth: 2, // Number of spaces per indentation level
                                useTabs: false, // Whether to use tabs for indentation
                                semi: true, // Whether to add a semicolon at the end of every line
                                singleQuote: false, // If true, replaces double quotes with single quotes
                                trailingComma: 'es5', // Adds a trailing comma where possible. Other options: 'none', 'all'
                                bracketSpacing: true, // Whether to add spaces between brackets and object literals
                                jsxBracketSameLine: false, // If true, puts the closing bracket of a JSX element at the end of the last line instead of being alone on the next line
                                arrowParens: 'avoid', // If 'always', include parentheses around a sole arrow function parameter. 'avoid' does not include parentheses
                                parser: 'css' // Specifies the parser to be used
                            });

                            writeFileSync(`./save/styles/${fileName}`, formatted);
                        })
                        .then($Console_Progress(i, matchStyle.length, { done: ["TxtGreen"] }));
                };
                for (const style of oldStyles) {
                    $Console({ type: "log" }, $Console_Prefix.Data, { text: `Removing old style ${style}...`, colors: ["TxtYellow"] });
                    unlinkSync(`./save/styles/${style}`);
                };
            } else {
                $Console({ type: "warn" }, $Console_Prefix.Data, { text: "No styles were found!" });
            };

            /* ------------------------- */

            try {
                unlinkSync(`./save/${urlChoices[url].split("/")[2]}~channels~@me.html`);
            } catch (error) {
            };

            return [build, scripts, styles];
        });
    } else {
        const error = new Error(Errors.Data_UnknowURL.replace("%what%", url));
        $Console({ type: "error" }, $Console_Prefix.Data, { text: Errors.Error }, error);
        process.exit(Errors.ErrorCode_InvalidArgument);
    };
};

/**
 * @param {string} filePath File path from hostname.
 * 
 * @returns fileName
 */
function discordDataName(filePath) {
    const fileMatch = filePath.match(/\/assets\/(\w+)(\.\w+)(\.\w+)$/);
    if (fileMatch) {
        return `${fileMatch[1]}${fileMatch[3]}`;
    } else {
        const error = new Error(Errors.Data_InvalidArgument.replace("%what%", "filePath").replace("%details%", " filePath must match with /assets/name.identifier.extension."));
        $Console({ type: "error" }, $Console_Prefix.Data, { text: Errors.Error }, error);
        process.exit(Errors.ErrorCode_InvalidArgument);
    };
};

/**
 * 
 * @param {Object} file
 * @param {string?} file.folder The name of the folder in /save/ for the file to be in.
 * @param {string} file.fileName The name of the file.
 * 
 * @param {string} url The url where the 
 */
function downloadDiscordFile(file, url) {
    if (typeof file.fileName !== "string") {
        const error = new Error(Errors.Data_InvalidArgument.replace("%what%", "fileName").replace("%details%", " fileName must be a string."));
        $Console({ type: "error" }, $Console_Prefix.Data, { text: Errors.Error }, error);
        process.exit(Errors.ErrorCode_InvalidArgument);
    };

    if (url.startsWith("http")) {
        return fetch(url).then(res => res.text().then(content => {
            const name = file.folder ? file.folder + "/" + file.fileName : file.fileName;
            download(name, content);

            return content;
        })).catch(error => {
            $Console({ type: "error" }, $Console_Prefix.Data, { text: Errors.Error }, error);
            process.exit(Errors.ErrorCode_Fatal);
        });
    } else {
        const error = new Error(Errors.Data_InvalidURL.replace("%what%", url));
        $Console({ type: "error" }, $Console_Prefix.Data, { text: Errors.Error }, error);
        process.exit(Errors.ErrorCode_InvalidArgument);
    };
};

module.exports = { _getDiscordClientData, downloadDiscordFile };