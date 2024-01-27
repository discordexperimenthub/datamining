const { mkdirSync, existsSync } = require("fs");
const { _getDiscordClientData } = require("./");

if (!existsSync("./save")) mkdirSync("./save");
if (!existsSync("./save/scripts")) mkdirSync("./save/scripts");
if (!existsSync("./save/styles")) mkdirSync("./save/styles");
_getDiscordClientData("discordClientCanary");