const config = require('config');
const logger = require('./logger');
const appName = config.get('app.name');
const appPort = config.get('app.port');
const environment = config.get('app.environment');
const dbConfig = config.get('database');
const apiConfig = config.get('api');

logger.info(`Starting ${appName} in ${environment} mode on port ${appPort}...`);

function connectToDatabase() {
  logger.info('Connecting to the database...');
  logger.debug(`Database Host: ${dbConfig.host}`);
  logger.debug(`Database Port: ${dbConfig.port}`);
  logger.debug(`Database User: ${dbConfig.user}`);
  logger.info('Database Password: ****** (hidden for security)');
  logger.debug(`Database Name: ${dbConfig.dbName}`);
  logger.info('Database connection successful!');
}

function fetchFromAPI() {
  logger.info('Connecting to external API...');
  logger.debug(`API URL: ${apiConfig.url}`);
  logger.info('API Key: ****** (hidden for security)');
  logger.info('Fetched data from API successfully!');
}

function main() {
  logger.info('Initializing the application...');
  connectToDatabase();
  fetchFromAPI();
  logger.info(`${appName} is running on port ${appPort}.`);
}

main();
