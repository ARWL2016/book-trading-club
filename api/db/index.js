const mongoose = require('mongoose');
const User = require('./models/user');
const Book = require('./models/book');
const Request = require('./models/request');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log('mongoose connected to: ' + process.env.MONGODB_URI);
});

mongoose.connection.on('error', (err) => {
  console.log('mongoose connection error: ' + err);
});

module.exports = {
  mongoose,
  User,
  Book,
  Request
}



