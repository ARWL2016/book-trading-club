const { Book } = require('../db');
const { User } = require('../db');
// const { Request } = require('../db');
const chalk = require('chalk');

module.exports = {
  getAllBooks(req, res) {
    Book.find()
      .then(bookData => {
        res.status(200).send(bookData);
    })
      .catch(e => console.log(e));
  },

  getBooksByUserId(req, res) {
    const id = req.query.id;
    Book.find({userId: id})
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
    Book.find({ "title" : { $regex: new RegExp(title), $options: 'i' } })
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
    const id = user._id;
    bookToAdd.userId = id;
    bookToAdd.username = user.username;

    Book.create(bookToAdd).then(bookData => {

      // for now, duplicate books are allowed
      User.findById(id).then((user) => {
        user.bookIDs.push(bookData._id);
        user.save()
          .then(() => {
            res.status(200).send(bookData);
            console.log(chalk.green(`Book data was added successfully`));
        });
      }).catch(e => {
        res.status(400).send('Data could not be added');
        console.log(chalk.red(e));
      });
    })
  },

  deleteBookById(req, res) {
    const id = req.params.id;
    Book.findByIdAndRemove(id)
      .then(book => {
        User.findById(book.userId)
          .then(user => {
            const bookIdString = book._id.toString();
            const filteredArray = user.bookIDs.filter(id => id !== bookIdString);
            user.bookIDs = filteredArray;
            user.save().then(() => {
              res.status(200).send({message: 'Book was removed from the collection'});
            });
          });
      });
  }

}
