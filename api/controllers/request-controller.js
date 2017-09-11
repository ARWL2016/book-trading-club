const { Book } = require('../db');
const { User } = require('../db');
const { Request } = require('../db');
const chalk = require('chalk');

module.exports = {
  // requestBook(req, res) {
  //   const {request} = req.body;
  //   console.log(request);

  //   Book.findById(request.bookId)
  //     .then(bookData => {
  //       bookData.requests.push(request);
  //       bookData.save()
  //         .then(() => {
  //           User.findById(request.requesterId)
  //           .then(userData => {
  //             userData.requestsFromUser.push(request);
  //             userData.save()
  //             .then(() => {
  //               res.status(200).send('Request was made successfully');
  //             })
  //             .catch(error => console.log(error));
  //           });
  //         })
  //     });
  // },

  createRequest(req, res) {
    const {request} = req.body;
    console.log(chalk.green(request));

    Request.create(request).then(requestData => {
      Book.findById(requestData.bookId)
        .then(bookData => {
          bookData.requestsReceived.push(requestData._id);
          bookData.save()
            .then(() => {
              User.findById(requestData.requesterId)
              .then(user => {
                user.requestsMade.push(requestData._id);
                user.save()
                  .then(() => res.status(200).send());
              });
            });
        });
    });
  },


  // getRequestsForUserId(req, res) {
  //   const id = req.query.id;
  //   console.log('get books', id);
  //   User.findById(id)
  //     .then(user => {
  //       const requests = user.requestsFromUser;
  //       let bookIds = [];
  //       requests.forEach(request => {
  //         bookIds.push(request.bookId)
  //       });

  //       Book.find({'_id': {$in:bookIds}})
  //         .then(books => {
  //           console.log(books);
  //           const responseData = { requests, books};
  //           res.status(200).send(responseData);
  //         });
  //     });
  // },

  getRequestsByUser(req, res) {
    const id = req.query.id;

    Request.find({ requesterId: id })
      .then(requests => {
        let results = [];

        const bookIds = requests.map(request => {
          return request.bookId;
        });

        Book.find({'_id': {$in:bookIds}})
          .then(books => {
            books.forEach((book, index) => {
              results.push({
                book: book,
                request: requests[index]
              })
            })
            res.status(200).send(results);
          });
      })
      .catch(e => res.status(400).send(e));
  }

}
