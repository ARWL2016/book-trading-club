const { User } = require('../auth/user.model');

const authenticate = (req, res, next) => {
  const token = req.header('X-Auth');
  console.log('AUTH: ', token);

  User.findByToken(token).then((user) => {
    console.log('authenticate ', user);
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  });
};

module.exports = { authenticate };
