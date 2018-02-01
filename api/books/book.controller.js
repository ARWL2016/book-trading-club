const { Book } = require('./book.model');
const { User } = require('../auth/user.model');

module.exports = {
  getAllBooks(req, res) {
    Book
      .find()
      .sort({ _id: -1 })
      .then(bookData => {
        res.status(200).send(bookData);
      })
      .catch(e => {
        res.status(404).send();
      });
  },

  getBooksByUserId(req, res) {
    const id = req.query.id;
    Book
      .find({ userId: id })
      .sort({ _id: -1 })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(e => {
        res.send(500).send('Could not fetch books for current user');
      })
  },

  searchBooksByTitle(req, res) {
    const title = req.params.title;
    Book
      .find({ 'title': { $regex: new RegExp(title), $options: 'i' } })
      .sort({ title: 1 })
      .then(data => {
        if (data) {
          res.status(200).send(data);
        } else {
          res.status(200).send('The query returned no results');
       }
    });
  },

  addBook(req, res) {
    const { user, bookToAdd } = req.body;

    // add user id to the book we will save
    bookToAdd.userId = user._id;
    bookToAdd.username = user.username;

    Book.create(bookToAdd).then(bookData => {
      User.findByIdAndUpdate(user._id, { $push: { bookIds: bookData._id } })
        .then(() => {
          res.status(200).send(bookData);
        })
        .catch(e => {
          res.status(400).send('Data could not be added');
        });
    });
  },

  deleteBookById(req, res) {
    // TODO clean up any requests for this book
    const id = req.params.id;
    Book.findByIdAndRemove(id)
      .then(book => {
        User
          .findByIdAndUpdate(book.userId, { $pull: { bookIDs: book._id } })
          .then(() => {
            res.status(200).send({ message: 'Book removed from collection' });
          });
      });
  }

};
