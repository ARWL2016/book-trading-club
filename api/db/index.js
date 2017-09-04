const chalk = require('chalk');
const mongoose = require('mongoose');
const User = require('./models/user');
const Book = require('./models/book');


mongoose.Promise = global.Promise;

mongoose.connect(process.env.MLAB_URI);

mongoose.connection.on('connected', () => {
  console.log(chalk.green('mongoose connected to: ' + process.env.MLAB_URI));
});

mongoose.connection.on('error', (err) => {
  console.log(chalk.red('mongoose connection error: ' + err));
});

module.exports = {
  mongoose,
  User,
  Book
}



