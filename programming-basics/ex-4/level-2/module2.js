const createLogger = require('./logger');
const debugModule2 = createLogger('module2:debug'); 

function performTask() {
  debugModule2('Module2: Performing task...');
  console.log('Module2 task completed!');
}

module.exports = { performTask };
