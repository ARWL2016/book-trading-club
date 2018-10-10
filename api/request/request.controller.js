const { Book } = require('../books/book.model');
const { User } = require('../auth/user.model');
const { Request } = require('./request.model');
const ObjectId = require('mongodb').ObjectID;

module.exports = {

  createRequest(req, res, next) {
    const { request } = req.body;
    const { bookId, requesterName, requesterId } = request;
    let _id = new ObjectId();

    Request
      .create(request)
      .then(requestData => {
        _id = requestData._id;
        return Book.findByIdAndUpdate(bookId,
          { $push: { requestsReceived: _id, usersRequesting: requesterName } });
      })
      .then(() => {
        return User.findByIdAndUpdate(requesterId,
          { $push: { requestsMade: _id } });
      })
      .then(() => {
        res.status(200).send('Request added');
      })
      .catch(e => next(e));
  },

  deleteRequest(req, res, next) {
    const _id = req.params.id;
    let bookId;
    let requesterName;
    let requesterId;

    Request
      .findByIdAndRemove(_id)
      .then(request => {
        bookId = request.bookId;
        requesterName = request.requesterName;
        requesterId = request.requesterId;

        return Book.findByIdAndUpdate(bookId,
          { $pull: { requestsReceived: _id, usersRequesting: requesterName } });
      })
      .then(book => {
        return User.findByIdAndUpdate(requesterId,
          { $pull: { requestsMade: _id } });
      })
      .then(user => {
        res.status(200).send('Request deleted');
      })
      .catch(e => next(e));
  },

  getRequestsByUser(req, res, next) {
    const id = req.query.id;

    Request.find({ requesterId: id })
      .then(requests => {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.status(200).send(requests);
      })
      .catch(e => next(e));
    }

};
