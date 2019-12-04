'use strict';

const morgan = require('morgan');
const winston = require('winston');

const options = {
    file: {
        level: 'info',
        filename: `./logs/app.log`,
        handleExceptions: true,
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};
const logger = winston.createLogger({
    format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.json()
    ),
    transports: [
        new winston.transports.File(options.file),
        new winston.transports.Console(options.console)
    ],
    exitOnError: false
});
logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
};

const mylogger = morgan('combined', { stream: logger.stream });

module.exports = {
    name: 'egateway-logger',
    policy: (actionParams) => {
        return (req, res, next) => {
            mylogger(req, res, () => { });
            next();
        };
    }
};
