var config = require("./config.js");
var log = require("./logger.js");
var fs = require('fs');
var express = require("express"); //base framework
var bodyParser = require("body-parser"); //for post extrraction
var app = express(); //start server
var compression = require("compression");

app.use(compression());

app.use(bodyParser.json({
  limit: config.requestSizeLimit
})); // to support JSON-encoded bodies

app.use(bodyParser.urlencoded({
  limit: config.requestSizeLimit,
  extended: true
})); // to support URL-encoded bodies

var processor = require("./requestProcessor.js");

/**
 * @apiDefine FilesDto
 * @apiVersion 0.0.1
 * @apiParam {Object[]} files List of files
 * @apiParam {Byte[]} file.file byte array of file data
 * @apiParam {String} file.name File name
 * @apiParam {String} file.folderPath subfolder to save file in if any
 * @apiParam {String} file.extension Geeze, try to figure that guy out
 */

/**
 * @api {post} /save Perform Query
 * @apiName Save
 * @apiGroup Save
 * @apiVersion 0.0.1
 * @apiUse FilesDto
 * @apiErrorExample {String} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     An unexpected error occurred, please check the logs
 */

//default listen action
app.post("/save", function(req, res, next) {
  var requestStart = process.hrtime();

  processor.saveFiles(req, function(err, result) {
    if (err) return next(err);

    res.json(result);
  });
});

app.use('/doc', express.static('doc'));

app.listen(config.port, config.host);