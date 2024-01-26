const { $Console, $Console_Prefix } = require("../utils/$Console");

const Errors = require("../utils/Errors.json");

const fs = require("node:fs");
const path = require("node:path");

/**
 * @param {string} url Choose an url to lookup.
 * @returns {Promise<_getFile>}
 * @returns {string} content
 */
function _getFile(url) {
    if (url.startsWith("http")) {
        const Url = new URL(url);
        return fetch(url).then(res => res.text().then(content => {
            const domain = Url.hostname;
            const precise =  Url.pathname.replace(/\//g, "~");
            const path = /\.\w+$/.test(precise.split("~")[precise.split("~").length-1]) ? precise : precise + ".html";
            download(domain + path, content)
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

/**
 * @param {string} fileName The name of the file.
 * @param {string} content What's inside the file.
 */
function download(fileName, content) {
    fs.writeFileSync(path.join(__dirname, "..", "..", "..", "/save/", fileName), content, "utf8");
};

module.exports = { _getFile, download };