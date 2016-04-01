var UsersAdapter = null;
var sha256 = null;

module.exports.init = function (libs, conf, managers, adapters) {
  sha256 = libs.sha256;
  UsersAdapter = adapters.Users;

  UsersAdapter.initAdminUser();
};

function createUser(name, email, password, confirmation) {
  return new Promise(function (fulfill, reject) {
    if (!name || !name.length) {
      reject('Empty username');
    } else if (!email || !email.length) {
      reject('Empty email');
    } else if (!password || !password.length) {
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
    createUser(req.body.username, req.body.email, req.body.password, req.body.confirmation)
      .then(function (user) {
        console.log('user created');
        req.session.save(function () {
          res.redirect(params.successRedirect);
        });
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
        if (password && user.password == sha256(password)) {
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
