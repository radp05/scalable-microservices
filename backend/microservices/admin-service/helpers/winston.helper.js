const winston = require('winston');
const config = require('../config/config')
require('winston-daily-rotate-file');

var transport = new (winston.transports.DailyRotateFile)({
    filename: './logs/application-%DATE%.log',
    datePattern: config.WINSTON.datePattern,
    zippedArchive: true,
    maxSize: config.WINSTON.maxSize,
    maxFiles: config.WINSTON.maxFiles
});

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    timestamp: function () {
        return (new Date()).toLocaleTimeString();
    },
    transports: [
        transport,
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
        //new winston.transports.File({ filename: './logs/combined.log' })
    ]
});


logger.add(new winston.transports.Console({
    format: winston.format.simple()
}));

module.exports = logger