const winston = require('winston')
var path = require('path')
var options = {
  file: {
    level: 'info',
    filename: path.join(__dirname, '../logs/devices.log'),
    //handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'error',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
}


var errorOptions = {
  file: {
    level: 'error',
    filename: path.join(__dirname, '../logs/exceptions.log'),
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'error',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
}


exports.logger = winston.createLogger({
  level: winston.config.npm.levels,
  format: winston.format.json(),

  transports: [
    new winston.transports.File(options.file)
  ],
  exceptionHandlers: [
    new winston.transports.File(errorOptions.file),
    new winston.transports.Console(errorOptions.file.console)
  ]
});


//exports.logger = logger