const chalk = require('chalk');
const mongoose = require('mongoose');
const User = require('./models/user');
const Book = require('./models/book');
const Request = require('./models/request');


mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);
// mongoose.connect(process.env.MONGO_LOCAL);

mongoose.connection.on('connected', () => {
  console.log(chalk.green('mongoose connected to: ' + process.env.MONGODB_URI));
  // console.log(chalk.green('mongoose connected to: ' + process.env.MONGO_LOCAL));
});

mongoose.connection.on('error', (err) => {
  console.log(chalk.red('mongoose connection error: ' + err));
});

module.exports = {
  mongoose,
  User,
  Book,
  Request
}



