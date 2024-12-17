const logger = require('../logger');

module.exports = {
  calculateSin: (value) => {
    const result = Math.sin(value);
    logger.info(`SIN(${value}) = ${result}`);
    return result;
  },

  calculateCos: (value) => {
    const result = Math.cos(value);
    logger.info(`COS(${value}) = ${result}`);
    return result;
  },
};
