const winston = require('winston');
const debug = require('debug');
const debugLogger = debug('app:debug');
const logger = winston.createLogger({
  level: 'info',
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} [${level}]: ${message}`;
        })
      )
    }),
    new winston.transports.File({ filename: 'logs/app.log' })
  ]
});

module.exports = { logger, debugLogger };
