var fs = require("fs");
var log = require("./logger.js");

exports.saveFiles = function(req, resultCallback) {
    if (req.body.files){
        log.trace("begin processing files");
        
        for (var i=0; i< req.body.files.length; i++) {
            var fileToSave = req.body.files[i];
            if (fileToSave.file && fileToSave.name){
                
                var fileName = fileToSave.name + "." + fileToSave.extension
                
                fs.writeFile(fileName, fileToSave.file, 'binary', function(err){
                    if(err){
                        resultCallback(err);
                    } else {
                        resultCallback(null, "http://localhost:3000/gimmeFile?filePath=" + fileName);
                    }
                });
                
            } else {
                //no file to save Or no fileName, both are just terrible
                resultCallback(new Error("eeey"));
            }
        }
        
    } else {
        resultCallback(new Error("You didn't send any files, dummy."), null);
    }
    
}