const logger = require('./logger');

const variable = "Hello";
logger.log(`Success Message and variables: ${variable}`);

const error = "Error testing";
logger.error(`Error Message : ${error}`);