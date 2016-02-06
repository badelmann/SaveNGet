var config = require("./config.js");
var log4js = require("log4js");
var logger = log4js.getLogger("SaveNGet");

log4js.configure(config.log4jsConfigLocation, {});

module.exports = logger;
