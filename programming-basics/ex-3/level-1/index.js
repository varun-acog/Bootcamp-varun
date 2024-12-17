const logger = require('./logger');

logger.info("Program started");

function divide(a, b) {
  if (b === 0) {
    
    logger.error(`Division by zero attempted!`);
    return "Fatal Error: Cannot divide by zero!";
  }
  return a / b;
}

const result1 = divide(10, 2);
if (typeof result1 === 'number') {
  logger.info(`Operation successful: 10 divided by 2 equals ${result1}`);
} else {
  logger.error(result1);  
}

const result2 = divide(10, 0);
if (typeof result2 === 'number') {
  logger.info(`Operation successful: 10 divided by 0 equals ${result2}`);
} else {
  logger.error(result2);  
}

