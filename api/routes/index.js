const AuthController = require('../controllers/auth-controller');
const {authenticate} = require('../middleware/authenticate');
const path = require('path');

module.exports = (app) => {

  app.post('/api/auth/register', AuthController.register);
  app.post('/api/auth/login', AuthController.login);
  app.delete('/api/auth/logout', authenticate, AuthController.logout);

  app.get('*', (req, res) => {
    res.redirect('/');
    // res.sendFile(path.join(__dirname, '../../', 'dist/index.html'));

  })

}
