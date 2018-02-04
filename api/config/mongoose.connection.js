const mongoose = require('mongoose');
const { logger } = require('./logger');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_LOCAL);

mongoose.connection.on('connected', () => {
  logger.info('mongoose connected to: ' + process.env.MONGO_LOCAL);
});

mongoose.connection.on('error', (err) => {
  logger.error('mongoose connection error: ' + err);
});

module.exports = { mongoose };


