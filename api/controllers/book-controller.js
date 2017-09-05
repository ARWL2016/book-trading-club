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
  }
}
