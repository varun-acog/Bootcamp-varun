const config = require('config');
const logger = require('./logger');
const path = require('path');

const appName = config.get('app.name');
const environment = config.get('app.environment');
const commands = config.get('commands');

logger.info(`Starting ${appName} in ${environment} mode...`);
logger.info(config.get('additionalMessage'));

function executeCommands() {
  logger.info("Executing commands dynamically...");

  commands.forEach((cmd) => {
    try {
      logger.debug(`Loading function '${cmd.function}' from file '${cmd.file}'...`);

      const modulePath = path.resolve(__dirname, cmd.file);
      const loadedModule = require(modulePath);

      if (typeof loadedModule[cmd.function] === 'function') {
        logger.info(`Running command: ${cmd.name} - ${cmd.description}`);
        const value = Math.PI / 4; 
        const result = loadedModule[cmd.function](value);
        logger.info(`Result of '${cmd.name}': ${result}`);
      } else {
        logger.warn(`Function '${cmd.function}' not found in '${cmd.file}'`);
      }
    } catch (error) {
      logger.error(`Failed to load or execute command '${cmd.name}': ${error.message}`);
    }
  });
}

function main() {
  logger.info("Application initialized. Loading commands...");
  executeCommands();
  logger.info("All commands executed successfully.");
}

main();
