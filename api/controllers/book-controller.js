const { Book } = require('../db');
const { User } = require('../db');
// const { Request } = require('../db');
const chalk = require('chalk');

module.exports = {
  getAllBooks(req, res) {
    Book.find().sort({_id: -1})
      .then(bookData => {
        res.status(200).send(bookData);
    })
      .catch(e => {
        console.log(e);
        res.status(404).send();
      });
  },

  getBooksByUserId(req, res) {
    const id = req.query.id;
    Book.find({userId: id}).sort({_id: -1})
      .then(data => {
        res.status(200).send(data);
      });
  },

  // getBooksByIds(req, res) {
  //   const ids = req.body;
  //   Book.find({'_id': {$in:ids}})
  //     .then(data => {
  //       console.log(data);
  //       return data;
  //     })
  // },

  searchBooksByTitle(req, res) {
    const title = req.params.title;
    Book.find({ "title" : { $regex: new RegExp(title), $options: 'i' } }).sort({title: 1})
      .then(data => {
      if (data) {
        res.status(200).send(data);
      } else {
        res.status(200).send('The query returned no results');
      }
    })
  },

  addBook(req, res) {
    console.log(chalk.green('ADD BOOKS'));
    const {user, bookToAdd} = req.body;

    // add user id to the book we will save
    bookToAdd.userId = user._id;
    bookToAdd.username = user.username;

    Book.create(bookToAdd).then(bookData => {
      User.findByIdAndUpdate(user._id, {$push: {bookIds: bookData._id}})
        .then(() => {
          res.status(200).send(bookData);
        })
        .catch(e => {
          res.status(400).send('Data could not be added');
          console.log(chalk.red(e));
        });
    })
  },

  deleteBookById(req, res) {
    // also need to clean up any requests for this book
    const id = req.params.id;
    Book.findByIdAndRemove(id)
      .then(book => {
        User.findByIdAndUpdate(book.userId, {$pull: { bookIDs: book._id}})
          .then(() => {
            res.status(200).send({message: 'Book was removed from collection'});
          });
      });
  }

}
