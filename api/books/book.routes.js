const BookController = require('./book.controller');
const { authenticate } = require('../middleware/authenticate');

module.exports = (app) => {
  // public routes
  app.get('/api/book/getBooks', BookController.getAllBooks);
  app.get('/api/book/getBooksByOffset?', BookController.getBooksByOffset);
  app.get('/api/book/getBookCount', BookController.getBookCount);
  app.get('/api/book/searchBooks/:title', BookController.searchBooksByTitle);

  // authenticated routes
  app.get('/api/book/getCurrentUsersBooks?', authenticate, BookController.getBooksByUserId);
  app.post('/api/book/addBook', authenticate, BookController.addBook);
  app.delete('/api/book/delete/:id', authenticate, BookController.deleteBookById);
};
