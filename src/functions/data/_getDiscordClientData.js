const baseChoices = {
    discordStable: "https://discord.com",
    discordPtb: "https://ptb.discord.com",
    discordCanary: "https://canary.discord.com"
};

const urlChoices = {
    discordClientStable: baseChoices.discordStable + "/channels/@me",
    discordClientPtb: baseChoices.discordPtb +"/channels/@me",
    discordClientCanary: baseChoices.discordCanary +"/channels/@me",
};

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
        _getFile(urlChoices[url]).then(file => {
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

            /* ------------------------- */
        
            /**
             * @readonly
             * @param {Array} scripts List of all scripts.
             */
            const scripts = []
            const matchScript = html.match(/<script[^>]*src=["'](.*?)["']/g);
            if (matchScript) {
                $Console({type: "log"}, $Console_Prefix.Data, {text: "Starting getting scripts...", colors: ["TxtGreen"]});
                $Console_Progress(0, matchScript.length, {done: ["TxtGreen"]});
                let i = 0;
                matchScript.forEach(script => {
                    const matchSrc = script.match(/src=["'](.*?)["']/);
                    const src = Url.protocol + "//" + Url.hostname + matchSrc[1];
                    scripts.push(src);
                    i++;
                    downloadDiscordFile({folder: "scripts", fileName: discordDataName(matchSrc[1])}, src)
                    .then($Console_Progress(i, matchScript.length, {done: ["TxtGreen"]}));
                });
            } else {
                $Console({type: "warn"}, $Console_Prefix.Data, {text: "No scripts were found!"});
            };

            /* ------------------------- */

            /**
             * @readonly
             * @param {Array} styles List of all styles.
             */
            const styles = [];

            const matchStyle = html.match(/<link\s+[^>]*rel=["']stylesheet["']/g);
            if (matchStyle) {
                $Console({type: "log"}, $Console_Prefix.Data, {text: "Starting getting styles...", colors: ["TxtGreen"]});
                $Console_Progress(0, matchStyle.length, {done: ["TxtGreen"]});
                let i = 0;
                matchStyle.forEach(style => {
                    const matchHref = style.match(/href=["'](.*?)["']/);
                    const href = Url.protocol + "//" + Url.hostname + matchHref[1];
                    styles.push(href);
                    i++;
                    downloadDiscordFile({folder: "styles", fileName: discordDataName(matchHref[1])}, href)
                    .then($Console_Progress(i, matchStyle.length, {done: ["TxtGreen"]}));
                });
            } else {
                $Console({type: "warn"}, $Console_Prefix.Data, {text: "No styles were found!"});
            };

            /* ------------------------- */

            return [build, scripts, styles];
        });
    } else {
        const error = new Error(Errors.Data_UnknowURL.replace("%what%", url));
        $Console({type: "error"}, $Console_Prefix.Data, {text: Errors.Error}, error);
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
        $Console({type: "error"}, $Console_Prefix.Data, {text: Errors.Error}, error);
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
        $Console({type: "error"}, $Console_Prefix.Data, {text: Errors.Error}, error);
        process.exit(Errors.ErrorCode_InvalidArgument);
    };

    if (url.startsWith("http")) {
        return fetch(url).then(res => res.text().then(content => {
            const name = file.folder ? file.folder + "/" + file.fileName : file.fileName;
            download(name, content);

            return content;
        })).catch(error => {
            $Console({type: "error"}, $Console_Prefix.Data, {text: Errors.Error}, error);
            process.exit(Errors.ErrorCode_Fatal);
        });
    } else {
        const error = new Error(Errors.Data_InvalidURL.replace("%what%", url));
        $Console({type: "error"}, $Console_Prefix.Data, {text: Errors.Error}, error);
        process.exit(Errors.ErrorCode_InvalidArgument);
    };
};

module.exports = { _getDiscordClientData, downloadDiscordFile };