var UsersAdapter = null;
var GroupsAdapter = null;
var sha256 = null;

module.exports.init = function (libs, conf, managers, adapters) {
  sha256 = libs.sha256;
  UsersAdapter = adapters.Users;
  GroupsAdapter = adapters.Groups;

  initAdminUser();
};

function initAdminUser() {
  return UsersAdapter.findByName('admin')
  .then(function (user) {
    if (!user) {
      UsersAdapter.createUser('admin', 'admin@example.com', sha256('admin'))
      .then(function (user) {
        GroupsAdapter.findByName('admin_default')
        .then(function (group) {
          if (group) {
            user.addGroups([group]);
          }
        });
      });
    }
  });
}

function checkNewUserValues(name, email, password, confirmation) {
  if (!name || !name.length) {
    return ('Empty username');
  } else if (!email || !email.length) {
    return ('Empty email');
  } else if (!password || !password.length) {
    return ('Empty password');
  } else if (password !== confirmation) {
    return ('Password and confirmation aren\'t the same');
  }

  return null;
}

function checkAndCreateUser(name, email, password, confirmation) {
  return new Promise(function (fulfill, reject) {
    const error = checkNewUserValues(name, email, password, confirmation);

    if (error) {
      reject(error);
    }

    UsersAdapter.findByEmail(email)
    .then(function (user) {
      if (!user) {
        UsersAdapter.findByName(name)
        .then(function (user) {
          if (!user) {
            UsersAdapter.createUser(name, email, sha256(password))
            .then(function (user) {
              GroupsAdapter.findByName('user_default')
              .then(function (group) {
                user.addGroups([group])
                .then(function () {
                  fulfill(user);
                });
              });
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
    checkAndCreateUser(req.body.username, req.body.email, req.body.password, req.body.confirmation)
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

module.exports.retrieveAllUsers = function (req, res) {
  return new Promise(function (fulfill, reject) {
    UsersAdapter.findAll().then(function (users) {
      const errors = [];

      if (req.session.lastOperation) {
        errors[0] = { reason: req.session.lastOperation };
        errors[1] = { reason: 'Hi I\'m an error' };
      }

      req.session.lastOperation = null;
      console.log('retrieveAllUsers');
      console.log('lastOp, before save, ' + errors[0]);
      req.session.save(function () {
        fulfill({ users: users, errors: (errors[0] ? errors : null) });
        console.log('lastOp, after save, ' + errors[0]);
      });
    });
  });
};

module.exports.updateUsers = function (params) {
  return function (req, res) {
    const request = req.body;

    req.session.lastOperation = 'updateUsers';
    console.log('currentOp, before save, ' + req.session.lastOperation);
    console.log(request);
    req.session.save(function () {
      console.log('currentOp, after save, ' + req.session.lastOperation);
      res.redirect(params.successRedirect);
    });
  };
};

module.exports.createUsers = function (params) {
  return function (req, res) {
    const request = req.body;

    req.session.lastOperation = 'createUsers';
    console.log('currentOp, before save, ' + req.session.lastOperation);
    console.log(request);
    req.session.save(function () {
      console.log('currentOp, after save, ' + req.session.lastOperation);
      res.redirect(params.successRedirect);
    });
  };
};

module.exports.deleteUsers = function (params) {
  return function (req, res) {
    const request = req.body;

    req.session.lastOperation = 'deleteUsers';
    console.log('currentOp, before save, ' + req.session.lastOperation);
    console.log(request);
    req.session.save(function () {
      console.log('currentOp, after save, ' + req.session.lastOperation);
      res.redirect(params.successRedirect);
    });
  };
};
