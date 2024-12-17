const readlineSync = require('readline-sync');
const { compute } = require('./compute');
const { logger } = require('./logger');

function startApp() {
  logger.info('Program started: Interactive compute program');
  const a = parseFloat(readlineSync.question('Enter first number: '));
  const b = parseFloat(readlineSync.question('Enter second number: '));
  const operation = readlineSync.question('Enter operation (add, subtract, multiply, divide): ').toLowerCase();

  logger.info(`User input received: a=${a}, b=${b}, operation=${operation}`);

  const result = compute(a, b, operation);
  logger.info(`Calculation result: ${result}`);

  if (result === 'Error: Division by zero!' || result === 'Error: Unknown operation') {
    logger.error('Error occurred during computation');
  } else {
    console.log(`Result: ${result}`);
  }
}

startApp();
