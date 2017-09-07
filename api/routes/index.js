const AuthController = require('../controllers/auth-controller');
const BookController = require('../controllers/book-controller');
const {authenticate} = require('../middleware/authenticate');
const path = require('path');

module.exports = (app) => {

  // auth routes (user collection)
  app.post('/api/auth/register', AuthController.register);
  app.post('/api/auth/login', AuthController.login);
  app.delete('/api/auth/logout', authenticate, AuthController.logout);

  //book routes
  app.post('/api/book/addBook', authenticate, BookController.addBook);
  app.get('/api/book/getBooks', BookController.getAllBooks);
  app.get('/api/book/searchBooks/:title', BookController.searchBooksByTitle);
  app.post('/api/book/requestBook', BookController.requestBook);
  app.get('/api/book/getCurrentUsersBooks?', BookController.getBooksById);
  app.delete('/api/book/delete/:id', BookController.deleteBookById);

  // default route
  app.get('*', (req, res) => {
    res.redirect('/');
    // res.sendFile(path.join(__dirname, '../../', 'dist/index.html'));

  })

}
