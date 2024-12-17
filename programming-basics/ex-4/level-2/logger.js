const debug = require('debug'); 
function createLogger(namespace) {
  return debug(namespace); 
}

module.exports = createLogger;
