const User = require('../db/models/user');

const authenticate = (req, res, next) => {
  const token = req.header('X-Auth');
  console.log("AUTH");

  User.findByToken(token).then((user) => {
    if(!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  });
};

module.exports = {authenticate};
