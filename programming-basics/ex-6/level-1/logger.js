const { createLogger, format, transports } = require('winston');
const config = require('config');

const logger = createLogger({
  level: config.get('logger.level'),
  format: format.combine(
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'app.log' }),
  ],
});

module.exports = logger;
