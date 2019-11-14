const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    timestamp: function () {
        return (new Date()).toLocaleTimeString();
    },
    //defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log` 
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: './logger/error.log', level: 'error' }),
        new winston.transports.File({ filename: './logger/combined.log' })
    ]
});


logger.add(new winston.transports.Console({
    format: winston.format.simple()
}));

module.exports = logger