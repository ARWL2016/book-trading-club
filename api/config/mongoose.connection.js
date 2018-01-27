const mongoose = require('mongoose');
const { logger } = require('./logger');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  logger.info('mongoose connected to: ' + process.env.MONGODB_URI);
});

mongoose.connection.on('error', (err) => {
  logger.error('mongoose connection error: ' + err);
});

module.exports = { mongoose };


