var UsersAdapter = null;
var sha256 = require('js-sha256');

module.exports.init = function (libs, conf, managers, adapters) {
  UsersAdapter = adapters.Users;
};

function createUser(name, email, password, confirmation) {
  return new Promise(function (fulfill, reject) {
    if (!name.length) {
      reject('Empty username');
    } else if (!password.length) {
      reject('Empty password');
    } else if (password !== confirmation) {
      reject('Password and confirmation aren\'t the same');
    }

    UsersAdapter.findByEmail(email)
    .then(function (user) {
      if (!user) {
        UsersAdapter.findByName(name)
        .then(function (user) {
          if (!user) {
            UsersAdapter.createUser(name, email, sha256(password))
            .then(function (user) {
              fulfill(user);
            });
          } else {
            reject('A user already exists with this name');
          }
        });
      } else {
        reject('A user already exists with this email');
      }
    });
  });
}

module.exports.createUser = function (params) {
  return function (req, res) {
    console.log(req.body.username + ' ' + req.body.email + ' ' + req.body.password + ' ' + req.body.confirmation);
    createUser(req.body.username, req.body.email, sha256(req.body.password), sha256(req.body.confirmation))
      .then(function (user) {
        console.log('user created');
      }).catch(function (error) {
        console.log(error);
        res.redirect(params.failureRedirect);
      }
    );
  };
};

module.exports.identifyUser = function (name, password) {
  return new Promise(function (fulfill, reject) {
    UsersAdapter.findByName(name)
    .then(function (user) {
      if (user) {
        if (user.password == sha256(password)) {
          fulfill(user);
        } else {
          reject('Invalid password');
        }
      } else {
        reject('Unknown user name');
      }
    });
  });
};
