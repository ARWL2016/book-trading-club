const { Book } = require('../books/book.model');
const { User } = require('../auth/user.model');
const { Request } = require('./request.model');
const ObjectId = require('mongodb').ObjectID;

module.exports = {

  // createRequest(req, res) {
  //   const { request } = req.body;

  //   Request.create(request)
  //     .then(requestData => {
  //       const { _id, bookId, requesterName, requesterId } = requestData;

  //       Book.findByIdAndUpdate(bookId, { $push: {requestsReceived: _id, usersRequesting: requesterName } })
  //         .then((book) => {

  //           User.findByIdAndUpdate(requesterId, { $push: { requestsMade: _id } })
  //             .then(() => {
  //               res.status(200).send('Request added');
  //             })
  //         });

  //   }).catch(e => console.log(e));
  // },

  createRequest(req, res) {
    const { request } = req.body;
    const { bookId, requesterName, requesterId } = request;
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
    const id = req.params.id;

    Request
      .findByIdAndRemove(id)
      .then(request => {
        const { bookId, _id, requesterName, requesterId } = request;
        console.log({ request });
        Book
          .findByIdAndUpdate(bookId, { $pull: {
            requestsReceived: _id,
            usersRequesting: requesterName
          } })
          .then(() => {
            User.findByIdAndUpdate(requesterId,
                  { $pull: { requestsMade: _id } });
          });
      })
      .then(() => res.status(200).send('Request deleted'))
      .catch(e => res.status(400).send());
  },

  getRequestsByUser(req, res) {
    const id = req.query.id;

    Request.find({ requesterId: id })

      .then(requests => {
        let results = [];

        const bookIds = requests.map(request => {
          return request.bookId;
        });

        Book.find({ '_id': { $in: bookIds } })
          .then(books => {
            books.forEach((book, index) => {
              results.push({
                book: book,
                request: requests[index]
              });
            });
            res.status(200).send(results);
          });
      })
      .catch(e => res.status(400).send(e));
  }

};
