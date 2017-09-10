const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  requesterId: {
    type: String,
    required: true
  },
  requesterName: {
    type: String,
    required: true
  },
  ownerId: {
    type: String,
    required: true
  },
  ownerName: {
    type: String,
    required: true
  },
  bookId: {
    type: String,
    required: true
  },
  dateRequested: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

module.exports = RequestSchema;
