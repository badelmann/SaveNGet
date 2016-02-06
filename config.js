module.exports = function() {
    return {
        env: "local",
        port: 3000,
        host: "127.0.0.1",
        debugTime: true,
        proxy: null,
        detailedErrors: true,
        log4jsConfigLocation: "deployment/log4js/log4jsConfiguration.json",
        requestSizeLimit: "50mb"
    };
}();
