const AuthController = require('./auth.controller');
const { authenticate } = require('../middleware/authenticate');

module.exports = (app) => {
  // auth routes (user collection)
  app.post('/api/auth/register', AuthController.register);
  app.post('/api/auth/login', AuthController.login);
  app.get('/api/auth/check/:username', AuthController.checkUsername);
  app.delete('/api/auth/logout', authenticate, AuthController.logout);
};
