const winston = require('winston');

const customLevels = {
  levels: {
    error: 0,
    warn: 1,
    info: 2
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green'
  }
};

const logger = winston.createLogger({
  levels: customLevels.levels,
  transports: [
    new winston.transports.Console({
      level: 'info', 
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      )
    }),
    
    new winston.transports.File({
      filename: 'logs/app.log',
      level: 'info', 
      format: winston.format.combine(
        winston.format.timestamp(), 
        winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} ${level}: ${message}`; 
        })
      )
    })
  ]
});


winston.addColors(customLevels.colors);

module.exports = logger;

