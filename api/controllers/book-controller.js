const { Book } = require('../db');
const { User } = require('../db');

module.exports = {
  addBook(req, res) {
    const {user, bookToAdd} = req.body;
    bookToAdd.userId = user._id;
    // find this user in db
    // see if this book exists there
    // if so, send an error
    // else, add to collection

    Book.create(bookToAdd).then(data => {
      console.log('ADDED TO BOOK COLLECTION ', data);
      res.status(400).send(data);
    })

  }
}
