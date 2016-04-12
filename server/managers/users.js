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

function checkNewUserName(name) {
  return (!name || !name.length ? 'Empty user name' : null);
}

function checkNewUserEmail(email) {
  return (!email || !email.length ? 'Invalid user email' : null);
}

function checkNewUserPassword(password, confirmation) {
  return (!password || !confirmation || !password.length ? 'Invalid user password/confirmation' : null);
}

function checkNewUserValues(name, email, password, confirmation) {
  var error = null;

  if ((error = checkNewUserName(name)) || (error = checkNewUserEmail(email)) ||
  (error = checkNewUserPassword(password, confirmation))) {
    return error;
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
            reject('A user already exists with this name ' + name);
          }
        });
      } else {
        reject('A user already exists with this email ' + email);
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
      const errors = req.session.errors;

      req.session.errors = null;
      console.log('retrieveAllUsers');
      console.log('lastOp, before save, ' + errors);
      req.session.save(function () {
        fulfill({ users: users, errors: errors });
        console.log('lastOp, after save, ' + errors);
      });
    });
  });
};

function ajaxRedirect(res, url) {
  const data = JSON.stringify(url);

  res.contentType('application/json');
  res.header('Content-Length', data.length);
  res.end(data);
}

function saveSessionAndRedirect(req, res, redirect) {
  req.session.save(function () {
    ajaxRedirect(res, redirect);
  });
}

function pushErrorInUserSession(req, request, reason) {
  req.session.errors = (req.session.errors ? req.session.errors : []);
  req.session.errors.push({ request: request, reason: reason });
  console.log('New error');
  console.log({ request: request, reason: reason });
}

function prepareUserNameUpdate(userModel, userUpdateRequest, fieldsToUpdate, reject) {
  var error = null;

  if (userUpdateRequest.name) {
    if (!(error = checkNewUserName(userUpdateRequest.name))) {
      userModel.name = userUpdateRequest.name;
      fieldsToUpdate.push('name');
    } else {
      reject(error + 'for user id ' + userUpdateRequest.id);
    }
  }
}

function prepareUserEmailUpdate(userModel, userUpdateRequest, fieldsToUpdate, reject) {
  var error = null;

  if (userUpdateRequest.email) {
    if (!(error = checkNewUserEmail(userUpdateRequest.email))) {
      userModel.email = userUpdateRequest.email;
      fieldsToUpdate.push('email');
    } else {
      reject(error + 'for user id ' + userUpdateRequest.id);
    }
  }
}

function prepareUserPasswordUpdate(userModel, userUpdateRequest, fieldsToUpdate, reject) {
  var error = null;

  if (userUpdateRequest.password) {
    if (!(error = checkNewUserPassword(userUpdateRequest.password, userUpdateRequest.confirmation))) {
      userModel.password = sha256(userUpdateRequest.password);
      fieldsToUpdate.push('password');
    } else {
      reject(error + 'for user id ' + userUpdateRequest.id);
    }
  }
}

function prepareUserGroupsUpdate(userModel, userUpdateRequest, fieldsToUpdate, reject) {
  if (userUpdateRequest.groups) {
    console.log('should update user groups');
  }
}

function updateUserProfile(userModel, userUpdateRequest) {
  return new Promise(function (fulfill, reject) {
    const fieldsToUpdate = [];

    prepareUserNameUpdate(userModel, userUpdateRequest, fieldsToUpdate, reject);
    prepareUserEmailUpdate(userModel, userUpdateRequest, fieldsToUpdate, reject);
    prepareUserPasswordUpdate(userModel, userUpdateRequest, fieldsToUpdate, reject);
    prepareUserGroupsUpdate(userModel, userUpdateRequest, fieldsToUpdate, reject);

    console.log(fieldsToUpdate);
    if (!fieldsToUpdate.length) {
      reject('No update needed for user id ' + userUpdateRequest.id);
    }

    fulfill(userModel.save({ fields: fieldsToUpdate }));
  });
}

module.exports.updateUsers = function (params) {
  return function (req, res) {
    if (req.body.users && req.body.users.constructor == Array) {
      req.body.users.forEach(function (user) {
        if (user.id) {
          UsersAdapter.findById(user.id).then(function (foundUser) {
            if (foundUser) {
              updateUserProfile(foundUser, user).catch(function (error) {
                pushErrorInUserSession(req, user, error);
              });
            } else {
              pushErrorInUserSession(req, user, 'User id ' + user.id + ' not found');
            }
          });
        } else {
          pushErrorInUserSession(req, user, 'Malformed user object');
        }
      });

      saveSessionAndRedirect(req, res, params.successRedirect);
    } else {
      pushErrorInUserSession(req, req.body, 'Invalid request');
      saveSessionAndRedirect(req, res, params.failureRedirect);
    }
  };
};

module.exports.createUsers = function (params) {
  return function (req, res) {
    if (req.body.users && req.body.users.constructor == Array) {
      req.body.users.forEach(function (user) {
        checkAndCreateUser(user.name, user.email, user.password, user.confirmation)
          .then(function (user) {
            console.log('user ' + user.name + ' created by admin');
          }).catch(function (error) {
            pushErrorInUserSession(req, user, error);
          }
        );
      });

      saveSessionAndRedirect(req, res, params.successRedirect);
    } else {
      pushErrorInUserSession(req, req.body, 'Invalid request');
      saveSessionAndRedirect(req, res, params.failureRedirect);
    }
  };
};

module.exports.deleteUsers = function (params) {
  return function (req, res) {
    if (req.body.users && req.body.users.constructor == Array) {
      req.body.users.forEach(function (userId) {
        UsersAdapter.findById(userId).then(function (user) {
          if (user) {
            user.destroy();
          } else {
            pushErrorInUserSession(req, userId, 'User id ' + userId + ' not found');
          }
        });
      });

      saveSessionAndRedirect(req, res, params.successRedirect);
    } else {
      pushErrorInUserSession(req, req.body, 'Invalid request');
      saveSessionAndRedirect(req, res, params.failureRedirect);
    }
  };
};
