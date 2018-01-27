const RequestController = require('./request.controller');

module.exports = (app) => {

  // request routes
  app.post('/api/request/createRequest', RequestController.createRequest);
  app.get('/api/request/getCurrentUsersRequests?', RequestController.getRequestsByUser);
  app.delete('/api/request/delete/:id', RequestController.deleteRequest);

}
