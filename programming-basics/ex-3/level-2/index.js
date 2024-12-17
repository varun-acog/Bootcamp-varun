const logger = require('./logger');

logger.info('Program started');

function divide(a, b) {
  if (b === 0) {
    logger.error('Division by zero attempted!');  
  } else {
    const result = a / b;
    logger.info(`Operation successful: ${a} divided by ${b} equals ${result}`);
  }
}

divide(10, 2);
divide(10, 0);  

