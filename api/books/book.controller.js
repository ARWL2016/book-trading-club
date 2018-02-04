const { Book } = require('./book.model');
const { User } = require('../auth/user.model');

module.exports = {
  // not in use - replaced by getBooksByOffset
  getAllBooks(req, res, next) {
    Book
      .find()
      .sort({ _id: -1 })
      .then(bookData => {
        res.status(200).send(bookData);
      })
      .catch(e => next(e));
  },

  getBookCount(req, res, next) {
    Book
      .count()
      .then(count => {
        // prevent IE from caching results
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.status(200).send({ count });
      })
      .catch(e => next(e));
  },

  getBooksByOffset(req, res, next) {
    const { skip, limit } = req.query;
    Book
      .find()
      .skip(+skip)
      .limit(+limit)
      .sort({ _id: -1 })
      .then(bookData => {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.status(200).send(bookData);
      })
      .catch(e => next(e));
  },

  getBooksByUserId(req, res, next) {
    const id = req.query.id;
    Book
      .find({ userId: id })
      .sort({ _id: -1 })
      .then(data => {
        res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
        res.status(200).send(data);
      })
      .catch(e => next(e));
  },

  searchBooksByTitle(req, res, next) {
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
      })
      .catch(e => next(e));
  },

  addBook(req, res, next) {
    const { user, bookToAdd } = req.body;

    // check for duplicates
    Book
      .find({ userId: user._id, title: bookToAdd.title, description: bookToAdd.description })
      .then(book => {
        if (book.length) {
          return res.status(409).send('Book already exists in users collection');
        }

        // add user id to the book we will save
        bookToAdd.userId = user._id;
        bookToAdd.username = user.username;

        Book
          .create(bookToAdd)
          .then(bookData => {
            User
              .findByIdAndUpdate(user._id, { $push: { bookIds: bookData._id } })
              .then(() => {
                res.status(200).send(bookData);
              })
              .catch(e => next(e));
          });
      })
      .catch(e => next(e));
  },

  deleteBookById(req, res, next) {
    // TODO clean up any requests for this book
    const id = req.params.id;
    Book.findByIdAndRemove(id)
      .then(book => {
        User
          .findByIdAndUpdate(book.userId, { $pull: { bookIDs: book._id } })
          .then(() => {
            res.status(200).send({ message: 'Book removed from collection' });
          });
      })
      .catch(e => next(e));
  }

};


