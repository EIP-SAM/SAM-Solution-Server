var UsersAdapter = null;

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
            UsersAdapter.createUser(name, email, password)
            .then(function (user) {
              fulfill(user);
            });
          } else {
            reject('An user already exists with this name');
          }
        });
      } else {
        reject('An user already exists with this email');
      }
    });
  });
}

module.exports.createUser = function (params) {
  return function (req, res) {
    console.log(req.body.username + ' ' + req.body.email + ' ' + req.body.password + ' ' + req.body.confirmation);
    createUser(req.body.username, req.body.email, req.body.password, req.body.confirmation)
      .then(function (user) {
        console.log('user created');
        res.redirect(params.successRedirect);
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
        if (user.password == password) {
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
