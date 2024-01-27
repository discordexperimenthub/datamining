const { mkdirSync, existsSync } = require("fs");
const { _getDiscordClientData } = require("./");

if (!existsSync("./save")) mkdirSync("./save");
_getDiscordClientData("discordClientCanary");