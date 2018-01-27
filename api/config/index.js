const env = process.env.NODE_ENV || 'development';
const { logger } = require('./logger');
const development = require('./development.json');
const test = require('./test.json');

let config = '';

// don't add development.json to source control!
if (env === 'development') {
  config = development;
  process.env.JWT_SECRET = config.JWT_SECRET;
  process.env.MONGODB_URI = config.MONGODB_URI;
  process.env.MONGO_LOCAL = config.MONGO_LOCAL;
}

if (env === 'test') {
  config = test;
  process.env.JWT_SECRET = config.JWT_SECRET;
  process.env.MONGODB_URI = config.MONGODB_URI;
  process.env.PORT = config.PORT;
}

logger.info('env:', env);
logger.info(config);

require('./mongoose.connection');

