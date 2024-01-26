const Errors = require("./Errors.json");

const Package = require("../../../package.json");

const colorsChoices = {
    Reset: "\x1b[0m",
    Bold: "\x1b[1m", Faint: "\x1b[2m", Italic: "\x1b[3m", Underline: "\x1b[4m",

    TxtBlack: "\x1b[30m", TxtRed: "\x1b[31m", TxtGreen: "\x1b[32m", TxtYellow: "\x1b[33m",
    TxtBlue: "\x1b[34m", TxtMagenta: "\x1b[35m", TxtCyan: "\x1b[36m", TxtWhite: "\x1b[37m",
    TxtBrightBlack: "\x1b[90m", TxtBrightRed: "\x1b[91m", TxtBrightGreen: "\x1b[92m", TxtBrightYellow: "\x1b[93m",
    TxtBrightBlue: "\x1b[94m", TxtBrightMagenta: "\x1b[95m", TxtBrightCyan: "\x1b[96m", TxtBrightWhite: "\x1b[97m",

    BgBlack: "\x1b[40m", BgRed: "\x1b[41m", BgGreen: "\x1b[42m", BgYellow: "\x1b[43m",
    BgBlue: "\x1b[44m", BgMagenta: "\x1b[45m", BgCyan: "\x1b[46m", BgWhite: "\x1b[47m",
    BgBrightBlack: "\x1b[100m", BgBrightRed: "\x1b[101m", BgBrightGreen: "\x1b[102m", BgBrightYellow: "\x1b[103m",
    BgBrightBlue: "\x1b[104m", BgBrightMagenta: "\x1b[105m", BgBrightCyan: "\x1b[106m", BgBrightWhite: "\x1b[107m",
};

const $Console_Prefix = {
    Console: {prefix: "Console", colors: ["TxtBlue"]},
    Test: {prefix: "Test", colors: ["BgYellow", "TxtBlack"]},
    Data: {prefix: "Data", colors: ["TxtMagenta"]}
};

/**
 * @param {Object} generalOptions
 * @param {"log" | "error" | "warn" | "info"} generalOptions.type The type of the console to use.
 * @param {boolean} [generalOptions.package=true] If the package name must be displayed.
 * 
 * @param {Object} prefixOptions
 * @param {string?} prefixOptions.prefix The text to display on the prefix.
 * @param {Array<keyof colorsChoices>} [prefixOptions.colors=["TxtYellow"]] The colors to display on the prefix.
 * @param {string} [prefixOptions.before="["] The text to display before the prefix.
 * @param {string} [prefixOptions.after="]"] The text to display after the prefix.
 * @param {Array<keyof colorsChoices>} [prefixOptions.sidesColors=prefixOptions.colors] The color to display on before and after.
 * 
 * @param {Object} textOptions
 * @param {string} textOptions.text The text to display.
 * @param {Array<keyof colorsChoices>} [textOptions.colors=["Reset"]] The colors to display on the text.
 * 
 * @param {string?} error The error to display, if an error must be displayed.
 * 
 * @throws **Will throw an error if** at least one used key is not proposed.
 */
function $Console(generalOptions, prefixOptions, textOptions, error) {

    /* generalOptions.type - Type of console */
    if (generalOptions.type !== "log" && generalOptions.type !== "error" && generalOptions.type !== "warn" && generalOptions.type !== "info") {
        const error = new Error(Errors.Console_UnknowType);
        $Console({type: "error"}, $Console_Prefix.Console, {text: Errors.Error}, error);
        process.exit(Errors.ErrorCode_InvalidArgument);
    };

    /* generalOptions.package - Package (before prefix) */
    const package = generalOptions.package !== false ? Package.name : "";
    const packageColors = [colorsChoices.TxtBrightBlack];

    /* prefixOptions.prefix - Prefix text (inside brackets) */
    const prefix = prefixOptions.prefix? prefixOptions.prefix.toUpperCase() : "";

    /* prefixOptions.colors - Prefix colors (inside brackets) */
    const prefixColors = [colorsChoices.TxtYellow];
    prefixOptions.colors?.forEach(color => {
        if (colorsChoices[color]) {
            prefixColors.push(colorsChoices[color]);
        } else {
            const error = new Error(Errors.Console_UnknowColor.replace("%where%", "prefix").replace("%what%", color));
            $Console({type: "error"}, $Console_Prefix.Console, {text: Errors.Error}, error);
            process.exit(Errors.ErrorCode_InvalidArgument);
        };
    });

    /* prefixOptions.before - Prefix opening of brackets */
    const before = prefix !== "" && prefixOptions.before ? prefixOptions.before : prefix !== "" ? "[": "";

    /* prefixOptions.after - Prefix opening of brackets */
    const after = prefix !== "" && prefixOptions.after ? prefixOptions.after : prefix !== "" ? "]": "";

    /* prefixOptions.sidesColors - Prefix brackets colors */
    const sidesColors = [];
    if (prefixOptions.sidesColors?.length >= 1) {
        prefixColors.push(colorsChoices.Reset);
        prefixOptions.sidesColors.forEach(color => {
            if (colorsChoices[color]) {
                sidesColors.push(colorsChoices[color]);
            } else {
                const error = new Error(Errors.Console_UnknowColor.replace("%where%", "brackets").replace("%what%", color));
                $Console({type: "error"}, $Console_Prefix.Console, {text: Errors.Error}, error);  
                process.exit(Errors.ErrorCode_InvalidArgument);
            };
        });
    } else {
        prefixColors.forEach(color => sidesColors.push(color));
    };

    /* textOptions.text - Text to display */
    if (!textOptions.text) {
        const error = new Error(Errors.Console_EmptyText);
        $Console({type: "error"}, $Console_Prefix.Console, {text: Errors.Error}, error);

        process.exit(Errors.ErrorCode_Uncaught);
    };

    /* textOptions.colors - Text colors */
    const textColors = [];
    generalOptions.type === "error" ? textColors.push(colorsChoices.TxtRed) :
    generalOptions.type === "info" ? textColors.push(colorsChoices.TxtBlue) :
    generalOptions.type === "warn" ? textColors.push(colorsChoices.TxtYellow) :
    textColors.push(colorsChoices.Reset);
    textOptions.colors?.forEach(color => {
        if (colorsChoices[color]) {
            textColors.push(colorsChoices[color]);
        } else {
            const error = new Error(Errors.Console_UnknowColor.replace("%where%", "text").replace("%what%", color));
            $Console({type: "error"}, $Console_Prefix.Console, {text: Errors.Error}, error);
            process.exit(Errors.ErrorCode_InvalidArgument);
        };
    });

    /* ------------------------- */

    const output = (
        packageColors.join("") + package + " > " + colorsChoices.Reset +
        sidesColors.join("") + before + colorsChoices.Reset +
        prefixColors.join("") + prefix + colorsChoices.Reset +
        sidesColors.join("") + after + colorsChoices.Reset +
        (after === "" ? "" : " ") +
        textColors.join("") + textOptions.text + colorsChoices.Reset
    );

    error ? console[generalOptions.type](output, error) : console[generalOptions.type](output);
    return [output, error];
};

/**
 * **Uses `process.stdout.write()`.** Please, do not log anything else before the end of the bar.
 * 
 * @param {number} current Number of completed tasks
 * @param {number} total Number of total tasks
 * 
 * @param {Object} options
 * @param {boolean} [options.package=true] If the package name must be displayed.
 * @param {Array<keyof colorsChoices>} [options.done=["TxtGreen"]] The colors to display for the done part of the bar.
 * @param {Array<keyof colorsChoices>} [options.todo=["TxtBrightBlack"]] The colors to display for the to do part of the bar.
 * 
 * @returns {string[]} output, bar
 */
function $Console_Progress(current, total, options) {
    if (typeof current !== "number" ||
    typeof total !== "number") {
        const error = new Error(Errors.ConsoleProgress_InvalidArgument);
        $Console({type: "error"}, $Console_Prefix.Console, {text: Errors.Error}, error);
        process.exit(Errors.ErrorCode_InvalidArgument);
    };

    const package = options.package !== false ? Package.name : "";
    const packageColors = [colorsChoices.TxtBrightBlack];

    const done = [colorsChoices.TxtGreen];
    options.done?.forEach(color => {
        if (colorsChoices[color]) {
            done.push(colorsChoices[color]);
        } else {
            const error = new Error(Errors.Console_UnknowColor.replace("%where%", "done").replace("%what%", color));
            $Console({type: "error"}, $Console_Prefix.Console, {text: Errors.Error}, error);
            process.exit(Errors.ErrorCode_InvalidArgument);
        };
    });

    const todo = [colorsChoices.TxtBrightBlack];
    options.todo?.forEach(color => {
        if (colorsChoices[color]) {
            todo.push(colorsChoices[color]);
        } else {
            const error = new Error(Errors.Console_UnknowColor.replace("%where%", "todo").replace("%what%", color));
            $Console({type: "error"}, $Console_Prefix.Console, {text: Errors.Error}, error);
            process.exit(Errors.ErrorCode_InvalidArgument);
        };
    });

    const percentage = (current/total)*100;
    const progression = ` - ${current}/${total}` + ` - ${total-current} left`;

    const bar = ("█".repeat(Math.floor(percentage/5)) +
    `${todo.join("")}▒`.repeat(Math.ceil((100-percentage)/5)) +
    ` ${Math.floor(percentage.toFixed(5))}%` +
    progression);

    const output = ("\r" + packageColors.join("") + package + " > " + colorsChoices.Reset +
    done.join("") + bar + colorsChoices.Reset);

    Math.floor(percentage.toFixed(5)) === 100 ? process.stdout.write(output + "\n") : process.stdout.write(output);

    return [output, bar];
};

module.exports = { colorsChoices, $Console_Prefix, $Console, $Console_Progress };