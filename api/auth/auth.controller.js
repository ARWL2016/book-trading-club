const { User } = require('./user.model');

module.exports = {
  register(req, res, next) {
    const body = req.body;
    const { username } = req.body;

    User.findOne({ username })
      .then(user => {
        if (user) {
          res.status(409).send('user exists');
        } else {
          const user = new User(body);
          user.save().then(() => {
            return user.generateAuthToken();
          }).then((token) => {
            user.password = undefined;
            user.tokens = undefined;
            res.header('X-Auth', token).send(user);
          });
        }
      })
      .catch(e => next(e));
  },

  checkUsername(req, res, next) {
    const username = req.params.username;
    User.findOne({ username })
      .then(user => {
        if (user) {
          res.status(409).send('username not available');
        } else {
          res.status(200).send('username available');
        }
      })
      .catch(e => next(e));
  },

  login(req, res, next) {
    const { username, password } = req.body;
    let user;
    User
      .findByCredentials(username, password)
      .then(existingUser => {
        user = existingUser;
        return existingUser.generateAuthToken();
      })
      .then(token => {
        user.password = undefined;
        user.tokens = undefined;
        res.header('X-Auth', token).send(user);
      })
      .catch(e => next(e));
  },

  logout(req, res, next) {
    req.user.removeToken(req.token).then(() => {
      res.status(200).send();
    })
    .catch(e => next(e));
  }
};
