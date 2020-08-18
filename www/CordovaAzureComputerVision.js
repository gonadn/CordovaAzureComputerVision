var exec = require('cordova/exec');

exports.coolMethod = function (arg0, success, error) {
    exec(success, error, 'CordovaAzureComputerVision', 'coolMethod', [arg0]);
};

exports.coolMethod = function (imagePath, success, error) {
    exec(success, error, 'CordovaAzureComputerVision', 'extractPrintedTextOCR', [imagePath]);
};