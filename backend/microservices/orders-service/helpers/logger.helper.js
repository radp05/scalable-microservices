/**
 * Log helper
 */

const winston = require('winston'),
      config = require('../config/config');

/**
 * winston logger
 * @param {String} string
 * @return {String} hash
 */

var logger =  winston.createLogger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: `${config.LogFilePath}`,
            handleExceptions: true,
            json: true,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: false
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

module.exports = logger;
module.exports.stream = {
    write: function(message, encoding){
        logger.info(message);
    }
};