const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  authors: [{
    type: String,
    required: false
  }],
  description: {
    type: String,
    required: false
  },
  imageLinks: {
    smallthumbnail: {
      type: String,
      required: false
    },
    thumbnail: {
      type: String,
      required: false
    }
  },
  pageCount: {
    type: Number,
    required: false
  },
  publishedDate: {
    type: String,
    required: false
  },
  publisher: {
    type: String,
    required: false
  },
  subtitle: {
    type: String,
    required: false
  },
  title: {
    type: String,
    text: true,
    required: false
  },
  userId: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  requestsReceived: [{
    type: String,
    required: false
  }],
  usersRequesting: [{
    type: String,
    required:  false
  }]
});


const Book = mongoose.model('book', BookSchema);

module.exports = { Book };
