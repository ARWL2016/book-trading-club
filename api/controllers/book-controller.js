const { Book } = require('../db');
const { User } = require('../db');
const chalk = require('chalk');

module.exports = {
  getAllBooks(req, res) {
    Book.find()
      .then(bookData => {
        res.status(200).send(bookData);
    })
      .catch(e => console.log(e));
  },

  getBooksById(req, res) {
    const id = req.query.id;
    console.log('get books', id);
    Book.find({userId: id})
      .then(data => {
        console.log(data);
        res.status(200).send(data);
      })
  },


  searchBooksByTitle(req, res) {
    const title = req.params.title;
    console.log(chalk.red(title));
    Book.find({ "title" : { $regex: new RegExp(title), $options: 'i' } })
      .then(data => {
      console.log(chalk.green(data));
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(200).send('The query returned no results');
      }

    })
  },
  addBook(req, res) {
    const {user, bookToAdd} = req.body;

    // add user id to the book we will save
    const id = user._id;
    bookToAdd.userId = id;

    Book.create(bookToAdd).then(bookData => {

      // add the new book ID to the users
      // for now, duplicate books are allowed
      User.findById(id).then((user) => {
        user.bookIDs.push(bookData._id);
        user.save()
          .then(() => {
            res.status(200).send(bookData);
            console.log(chalk.green(`Book data was added successfully`));
        })
          .catch(e => console.log(chalk.red(e)));
      })
    })
  },
  requestBook(req, res) {
    const {request} = req.body;
    console.log(request);

    Book.findById(request.bookId)
      .then(bookData => {
        bookData.requests.push(request);
        bookData.save()
          .then(() => {
            User.findById(request.requesterId)
            .then(userData => {
              userData.requestsFromUser.push(request);
              userData.save()
              .then(() => {
                res.status(200).send('Request was made successfully');
              })
              .catch(error => console.log(error));
            });
          })
      });
  }
}
