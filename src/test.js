const { $Console, $Console_Prefix } = require("./functions/utils/$Console");

const Errors = require("./functions/utils/Errors.json");

/*
const { $Console, $Console_Prefix, $Console_Progress } = require("./functions/utils/$Console");

$Console(
    {type: "log"},
    $Console_Prefix.Test,
    {text: "Here is my test progress bar:"}
);
$Console_Progress(0, 100, {});
for (let i = 1; i <= 100; i++) {
    setTimeout(() => $Console_Progress(i, 100, {}), i * 25);
};
*/

// const { _getFile } = require("./functions/data/_getFile");

// _getFile("https://discord.com/assets/shared.b96b378c74e95b5a113c.css");

const { _getDiscordClientData } = require("./functions/data/_getDiscordClientData");

_getDiscordClientData("discordClientStable");