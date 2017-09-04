const { Book } = require('../db');

module.exports = {
  addBook(req, res) {
    const {user, book} = req.body;
    console.log('Book Controller ADD BOOK FUNC:');
    console.log({user});
  }
}
