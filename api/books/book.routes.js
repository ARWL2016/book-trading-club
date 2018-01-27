const BookController = require('./book.controller');
const {authenticate} = require('../middleware/authenticate');

module.exports = (app) => {

  //book routes
  app.get('/api/book/getBooks', BookController.getAllBooks);
  app.get('/api/book/searchBooks/:title', BookController.searchBooksByTitle);
  app.get('/api/book/getCurrentUsersBooks?', BookController.getBooksByUserId);
  app.post('/api/book/addBook', authenticate, BookController.addBook);
  app.delete('/api/book/delete/:id', BookController.deleteBookById);


}
