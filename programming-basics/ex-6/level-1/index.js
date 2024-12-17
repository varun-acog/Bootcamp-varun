const config = require('config');
const logger = require('./logger');

const appName = config.get('app.name');
const appPort = config.get('app.port');
const dbConfig = config.get('database');
const apiConfig = config.get('api');

logger.info(`Starting ${appName} on port ${appPort}...`);

function connectToDatabase() {
  logger.info('Connecting to the database...');
  logger.info(`Database Host: ${dbConfig.host}`);
  logger.info(`Database Port: ${dbConfig.port}`);
  logger.info(`Database User: ${dbConfig.user}`);
  logger.info(`Database Name: ${dbConfig.dbName}`);

  if (dbConfig.password) {
    logger.info('Database Password: ****** (hidden for security)');
  } else {
    logger.warn('Database password is missing!');
  }

  logger.info('Database connection successful!');
}

function fetchFromAPI() {
  logger.info('Connecting to external API...');
  logger.info(`API URL: ${apiConfig.url}`);

  if (apiConfig.key) {
    logger.info('API Key: ****** (hidden for security)');
  } else {
    logger.warn('API Key is missing!');
  }

  logger.info('Fetched data from API successfully!');
}

function main() {
  logger.info('Initializing the application...');
  connectToDatabase();
  fetchFromAPI();
  logger.info(`${appName} is running on port ${appPort}.`);
}

main();
