const RequestController = require('./request.controller');
const { authenticate } = require('../middleware/authenticate');

module.exports = (app) => {
  // request routes
  app.post('/api/request/createRequest', authenticate, RequestController.createRequest);
  app.get('/api/request/getCurrentUsersRequests?', authenticate,
          RequestController.getRequestsByUser);
  app.delete('/api/request/delete/:id', authenticate, RequestController.deleteRequest);
};
