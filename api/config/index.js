const env = process.env.NODE_ENV || 'development';
const { logger } = require('./logger');

let config = '';

// don't add development.json to source control!
if (env === 'development') {
  config = require('./development.json');
  process.env.JWT_SECRET = config.JWT_SECRET;
  process.env.MONGODB_URI = config.MONGODB_URI;
  process.env.MONGO_LOCAL = config.MONGO_LOCAL;
}

if (env === 'test') {
  config = require('./test.json');
  process.env.JWT_SECRET = config.JWT_SECRET;
  process.env.MONGODB_URI = config.MONGODB_URI;
  process.env.PORT = config.PORT;
}

logger.info('env:', env);
logger.info(config);

require('./mongoose.connection');

