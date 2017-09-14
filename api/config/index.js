
let env = process.env.NODE_ENV || 'development';
console.log('ENV: ', env);


//maintain development JSON file separately and don't add to source control
if (env === 'development') {
  const config = require('./development.json');
  console.log(config);
  process.env.JWT_SECRET = config.JWT_SECRET;
  process.env.MLAB_URI = config.MLAB_URI;
  process.env.MONGO_LOCAL = config.MONGO_LOCAL;
  console.log(process.env.MONGO_LOCAL);
}

