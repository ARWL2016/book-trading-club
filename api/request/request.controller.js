const { Book } = require('../books/book.model');
const { User } = require('../auth/user.model');
const { Request } = require('./request.model');
const ObjectId = require('mongodb').ObjectID;

module.exports = {

  createRequest(req, res) {
    const { request } = req.body;
    const { bookId, bookTitle, requesterName, requesterId } = request;
    let _id = new ObjectId();

    Request
      .create(request)
      .then(requestData => {
        _id = requestData._id;
        return Book.findByIdAndUpdate(bookId, { $push: {requestsReceived: _id, usersRequesting: requesterName } });
      })
      .then(() => {
        return User.findByIdAndUpdate(requesterId, { $push: { requestsMade: _id } });
      })
      .then(() => {
        res.status(200).send('Request added');
      })
      .catch(e => {
        console.log(e)
        res.status(500).send('Request not added');
      });
  },

  deleteRequest(req, res) {
    const _id = req.params.id;
    let bookId,  requesterName, requesterId;
    console.log(_id);
    Request
      .findByIdAndRemove(_id)
      .then(request => {
        bookId = request.bookId;
        requesterName = request.requesterName;
        requesterId = request.requesterId;
        console.log({ request });

        return Book.findByIdAndUpdate(bookId, { $pull: {requestsReceived: _id, usersRequesting: requesterName} });
      })
      .then((book) => {
        console.log({book});
        return User.findByIdAndUpdate(requesterId,{ $pull: { requestsMade: _id } });
      })
      .then((user) => {
        console.log({user});
        res.status(200).send('Request deleted');
      })
      .catch(e => res.status(400).send('Request could not be deleted'));
  },

  getRequestsByUser(req, res) {
    const id = req.query.id;

    Request.find({ requesterId: id })
      .then(requests => {
        res.status(200).send(requests);
      })
      .catch(e => {
        console.log(e)
        res.status(500).send('Could not fetch requests');
      });
    }

};
