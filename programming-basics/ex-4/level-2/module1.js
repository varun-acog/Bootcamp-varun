const createLogger = require('./logger');
const debugModule1 = createLogger('module1:debug'); 

function performOperation() {
  debugModule1('Module1: Performing operation...');
  console.log('Module1 operation performed!');
}

module.exports = { performOperation };
