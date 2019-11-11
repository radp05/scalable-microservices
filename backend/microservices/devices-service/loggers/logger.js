const winston = require('winston')
var path = require('path')
var options = {
  file: {
    level: 'info',
    filename: path.join(__dirname, '/../logs/devices.log'),
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
}


const logger = winston.createLogger({
  level:winston.config.npm.levels,
  format:winston.format.json(),
  
  transports: [
   // new winston.transports.Console(),
    new winston.transports.File(options.file)
  ]
});


exports.logger = logger