const { logger, debugLogger } = require('./logger');
function compute(a, b, operation) {
  debugLogger(`Compute operation started: ${operation} for ${a} and ${b}`);

  let result;
  switch (operation) {
    case 'add':
      result = a + b;
      logger.info(`Addition performed: ${a} + ${b} = ${result}`);
      break;
    case 'subtract':
      result = a - b;
      logger.info(`Subtraction performed: ${a} - ${b} = ${result}`);
      break;
    case 'multiply':
      result = a * b;
      logger.info(`Multiplication performed: ${a} * ${b} = ${result}`);
      break;
    case 'divide':
      if (b === 0) {
        logger.error(`Division by zero error: ${a} / ${b}`);
        debugLogger('Error: Division by zero attempted');
        return 'Error: Division by zero!';
      } else {
        result = a / b;
        logger.info(`Division performed: ${a} / ${b} = ${result}`);
      }
      break;
    default:
      logger.warn(`Unknown operation: ${operation}`);
      return 'Error: Unknown operation';
  }

  return result;
}

module.exports = { compute };
