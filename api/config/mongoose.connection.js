const mongoose = require('mongoose');
const { logger } = require('./logger');

// const localDB = process.env.MONGO_LOCAL;
const mLab = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;

mongoose.connect(mLab);

mongoose.connection.on('connected', () => {
  logger.info('mongoose connected to: ' + mLab);
});

mongoose.connection.on('error', (err) => {
  logger.error('mongoose connection error: ' + err);
});

module.exports = { mongoose };


