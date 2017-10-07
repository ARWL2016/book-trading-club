let env = process.env.NODE_ENV || 'development';
console.log('ENV: ', env);

//maintain development JSON file separately and don't add to source control
if (env === 'development') {
  const config = require('./development.json');
  console.log(config);
  process.env.JWT_SECRET = config.JWT_SECRET;
  process.env.MONGODB_URI = config.MONGODB_URI;
  process.env.MONGO_LOCAL = config.MONGO_LOCAL;
}

if (env === 'test') {
  const config = require('./test.json');
  console.log(config);
  process.env.JWT_SECRET = config.JWT_SECRET;
  process.env.MONGODB_URI = config.MONGODB_URI;
  process.env.PORT = config.PORT;
}

