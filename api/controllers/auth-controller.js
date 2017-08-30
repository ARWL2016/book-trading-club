const { User } = require('../db');
const jwt = require('jsonwebtoken');

module.exports = {
  register(req, res) {
    const body = req.body;
    const {username} = req.body;

    User.findOne({username})
      .then(user => {
        if (user) {
          res.status(409).send("user exists");
        } else {
          const user = new User(body);
          user.save().then(() => {
            return user.generateAuthToken();
          }).then((token) => {
            user.password = undefined;
            user.tokens = undefined;
            res.header('X-Auth', token).send(user);
          })
        }
      }).catch(err => res.status(400).send(err));
  },

  login(req, res) {
    const { username, password } = req.body;

    User.findByCredentials(username, password).then((user) => {
      return user.generateAuthToken()
        .then((token) => {
          user.password = undefined;
          user.tokens = undefined;
          res.header('X-Auth', token).send(user);
      });
    }).catch((err) => {
      res.status(400).send();
    });


  },

  logout(req, res) {
    req.user.removeToken(req.token).then(() => {
      res.status(200).send();
    })
    .catch(err => res.status(400).send());
  }
}
