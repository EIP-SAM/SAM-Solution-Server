//
// Load librarie(s) used in this manager
//
const crypto = require('../libs/crypto');
const passwordGenerator = require('password-generator');

//
// Load config variable(s) from config file
//
const salt = require('../config/base.config.json').salt;

//
// Load other manager(s)
//
const UsersAdapter = require('../adapters/users');
const GroupsAdapter = require('../adapters/groups');
const rightsManager = require('./rights');
const mailManager = require('./mail');
const enumModules = rightsManager.enumModules;

//
// Create admin if not exists
//
initAdminUser();

function initAdminUser() {
  return UsersAdapter.findByName('admin')
  .then(function (user) {
    if (!user) {
      UsersAdapter.createUser('admin', 'admin@example.com', crypto.createHmac('sha256', salt).update('admin').digest('hex'))
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
  return (!password || !confirmation || !password.length || password != confirmation ? 'Invalid user password/confirmation' : null);
}

function checkNewUserValues(name, email, password, confirmation) {
  var error = null;

  if ((error = checkNewUserName(name)) || (error = checkNewUserEmail(email)) || (error = checkNewUserPassword(password, confirmation))) {
    return error;
  }

  return null;
}

function checkAndCreateUser(name, email, password, confirmation) {
  return new Promise(function (fulfill, reject) {
    const error = checkNewUserValues(name, email, password, confirmation);

    if (error) {
      reject(error, null);
    } else {
      UsersAdapter.findByEmail(email)
      .then(function (user) {
        if (!user) {
          UsersAdapter.findByName(name)
          .then(function (user) {
            if (!user) {
              UsersAdapter.createUser(name, email, crypto.createHmac('sha256', salt).update(password).digest('hex'))
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
              reject('A user already exists with this name', null);
            }
          });
        } else {
          reject('A user already exists with this email', null);
        }
      });
    }
  });
}

//
// Security check for each url of this kind : /api/public/*
//
module.exports.ensureLoggedOut = function (req, res, next) {
  if (req.user) {
    res.status(401).json({ error: 'Already logged-in' });
  } else {
    next();
  }
};

//
// Security check for each url of this kind : /api/logged-in/*
//
module.exports.ensureLoggedIn = function (req, res, next) {
  if (req.user) {
    next();
  } else {
    res.status(401).json({ error: 'Not logged-in' });
  }
};

//
// Security check for each url of this kind : /api/logged-in/admin/*
//
module.exports.ensureAdminLoggedIn = function (req, res, next) {
  if (req.user && req.user) { // req.user.isAdmin
    console.log('WARNING: User is admin is not really checked');
    next();
  } else {
    res.status(401).json({ error: 'Access denied' });
  }
};

//
// Create user entry point from its POST route
//
module.exports.createUser = function () {
  return function (req, res) {
    checkAndCreateUser(req.body.username, req.body.email, req.body.password, req.body.confirmation)
      .then(function (user) {
        return res.status(200).json({ success: 'User successfully created' });
      }).catch(function (userCreationError, internalError) {
        if (internalError) {
          return res.status(500).json({ error: 'Internal server error' });
        } else {
          return res.status(405).json({ error: userCreationError });
        }
      }
    );
  };
};

//
// User identification for passport library
//
module.exports.identifyUser = function (name, password) {
  return new Promise(function (fulfill, reject) {
    UsersAdapter.findByName(name).then(function (user) {
      if (user) {
        if (password && user.password == crypto.createHmac('sha256', salt).update(password).digest('hex')) {
          fulfill(user);
        } else {
          reject('Invalid password', null);
        }
      } else {
        reject('Unknown user', null);
      }
    }).catch(function (error) {
      reject(null, error);
    });
  });
};

//
// Construct a safe and showable user profile from a user (for client side)
//
function constructUserProfile(user) {
  return new Promise(function (fulfill, reject) {
    const userProfile = {
      name: user.name,
      email: user.email,
      saveAndRestoreMode: rightsManager.getModuleRightForUser(enumModules.SAVE_AND_RESTORE, user),
      migrationMode: rightsManager.getModuleRightForUser(enumModules.MIGRATION, user),
      softwarePackagesMode: rightsManager.getModuleRightForUser(enumModules.SOFTWARE_PACKAGES, user),
      groups: [],
    };

    user.groups.forEach(function (group) {
      userProfile.groups.push({
        name: group.name,
        saveAndRestoreMode: group.saveAndRestoreMode,
        migrationMode: group.migrationMode,
        softwarePackagesMode: group.softwarePackagesMode,
      });
    });

    fulfill(userProfile);
  });
}

//
// Log the user in the system and create a session for him
// Entry point from the login POST route
//
module.exports.login = function (passport) {
  return function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
      if (err) {
        return res.status(500).json({ error: 'Internal server error' });
      }

      if (!user) {
        return res.status(401).json({ error: info.message });
      }

      req.logIn(user, function (err) {
        if (err) {
          return res.status(500).json({ error: 'Internal server error' });
        } else {
          constructUserProfile(user).then(function (userProfile) {
            return res.status(200).json(userProfile);
          });
        }
      });

    })(req, res, next);
  };
};

//
// Logout the user and destroy his current session
// Entry point from the logout POST route
//
module.exports.logout = function () {
  return function (req, res) {
    req.logout();
    req.session.save(function () {
      res.status(200).end();
    });
  };
};

//
// Retrieve user profile for its GET route
//
module.exports.retrieveUserProfile = function () {
  return function (req, res) {
    UsersAdapter.findById(req.user.id).then(function (user) {
      if (user) {
        constructUserProfile(user).then(function (userProfile) {
          res.status(200).json(userProfile);
        });
      } else {
        res.status(500).json({ error: 'Internal server error' });
      }
    }).catch(function (error) {
      res.status(500).json({ error: 'Internal server error' });
    });
  };
};

//
// Email template for the user password recovery
//
const passwordRecoveryMailTemplate = {
  header: 'Hello,\n\nHere is your new generated password ',
  footer: '\nYou can use it to log in right now.\n\nNote: This is an automatic message, please do not respond to this mail.',
};

//
// Generate a new password of lenght 12, with non-memorable characters
// Generate a message for the user, containing the new password
// Fill this in a valid structure to able to call `updateUserProfile()`
//
function generatePasswordAndMessageBody() {
  const generatedPassword = passwordGenerator(12, false);

  return {
    password: generatedPassword,
    confirmation: generatedPassword,
    messageBody: passwordRecoveryMailTemplate.header + generatedPassword + passwordRecoveryMailTemplate.footer,
  };
}

//
// Generate a new password for the user associated with the given email address,
// send the new password to the user by email, and then assign the new password
// to the user. Reject with an error message if there is something not valid or
// not normal.
//
function recoverUserPassword(userEmail) {
  return new Promise(function (fulfill, reject) {
    UsersAdapter.findByEmail(userEmail).then(function (user) {
      if (user) {
        const passwordAndMessageBody = generatePasswordAndMessageBody();

        mailManager.send(userEmail, '[SAM-Solution] Password recovery', passwordAndMessageBody.messageBody)
        .then(function (mailInfo) {
          updateUserProfile(user, passwordAndMessageBody).then(function (user) {
            fulfill(user);
          }).catch(function (error) {
            reject(null, 'Internal server error');
          });
        }).catch(function (error) {
          reject('Unable to send an email to this email', null);
        });
      } else {
        reject('No user associated to this email', null);
      }
    });
  });
}

//
// Recover user password entry point from its POST route
//
module.exports.recoverUserPassword = function () {
  return function (req, res) {
    const userEmail = req.body.email;

    if (userEmail) {
      recoverUserPassword(userEmail).then(function (user) {
        res.status(200).json({ success: 'An email has been successfully sent to ' + userEmail });
      })
      .catch(function (usualError, internalError) {
        if (internalError) {
          return res.status(500).json({ error: 'Internal server error' });
        } else {
          return res.status(405).json({ error: usualError });
        }
      });
    } else {
      return res.status(405).json({ error: 'Empty email field' });
    }
  };
};

//
// Retrieve all users for its GET route
//
module.exports.retrieveAllUsers = function (req, res) {
  return new Promise(function (fulfill, reject) {
    UsersAdapter.findAll().then(function (users) {
      const errors = req.session.errors;

      users.forEach(function (user) {
        user.saveAndRestoreMode = rightsManager.getModuleRightForUser(enumModules.SAVE_AND_RESTORE, user);
        user.migrationMode = rightsManager.getModuleRightForUser(enumModules.MIGRATION, user);
        user.softwarePackagesMode = rightsManager.getModuleRightForUser(enumModules.SOFTWARE_PACKAGES, user);
      });

      req.session.errors = null;
      req.session.save(function () {
        fulfill({ users: users, errors: errors });
      });
    });
  });
};

//
// Redirect the browser from an ajax request
//
function ajaxRedirect(res, url) {
  const data = JSON.stringify(url);

  res.contentType('application/json');
  res.header('Content-Length', data.length);
  res.end(data);
}

//
// Save user session data (like errors) then redirect
//
function saveSessionAndRedirect(req, res, redirect) {
  req.session.save(function () {
    ajaxRedirect(res, redirect);
  });
}

function pushErrorInUserSession(req, request, reason) {
  req.session.errors = (req.session.errors ? req.session.errors : []);
  req.session.errors.push({ request: request, reason: reason });
}

//
// Check new user name, set model field to update, or reject with error
//
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

//
// Check new user email, set model field to update, or reject with error
//
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

//
// Check new user password, set model field to update, or reject with error
//
function prepareUserPasswordUpdate(userModel, userUpdateRequest, fieldsToUpdate, reject) {
  var error = null;

  if (userUpdateRequest.password) {
    if (!(error = checkNewUserPassword(userUpdateRequest.password, userUpdateRequest.confirmation))) {
      userModel.password = crypto.createHmac('sha256', salt).update(userUpdateRequest.password).digest('hex');
      fieldsToUpdate.push('password');
    } else {
      reject(error + 'for user id ' + userUpdateRequest.id);
    }
  }
}

//
// Update user profile, if possible, or reject with error
//
function updateUserProfile(userModel, userUpdateRequest) {
  return new Promise(function (fulfill, reject) {
    const fieldsToUpdate = [];

    prepareUserNameUpdate(userModel, userUpdateRequest, fieldsToUpdate, reject);
    prepareUserEmailUpdate(userModel, userUpdateRequest, fieldsToUpdate, reject);
    prepareUserPasswordUpdate(userModel, userUpdateRequest, fieldsToUpdate, reject);

    if (!fieldsToUpdate.length) {
      reject('No update needed');
    }

    fulfill(userModel.save({ fields: fieldsToUpdate }));
  });
}

//
// Update user profile entry point from its POST route
//
module.exports.updateUserProfile = function () {
  return function (req, res) {
    const userUpdate = {};

    userUpdate.name = req.body.username ? req.body.username : null;
    userUpdate.email = req.body.email ? req.body.email : null;
    userUpdate.password = req.body.password ? req.body.password : null;
    userUpdate.confirmation = req.body.confirmation ? req.body.confirmation : null;

    updateUserProfile(req.user, userUpdate).then(function (user) {
      return res.status(200).json({ success: 'Your profile has been successfully updated' });
    })
    .catch(function (error) {
      return res.status(405).json({ error: error });
    });
  };
};

//
// Update users entry point from its POST route
//
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

//
// Create users entry point from its POST route
//
module.exports.createUsers = function (params) {
  return function (req, res) {
    if (req.body.users && req.body.users.constructor == Array) {
      req.body.users.forEach(function (user) {
        checkAndCreateUser(user.name, user.email, user.password, user.confirmation)
          .then(function (user) {
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

//
// Delete users entry point from its POST route
//
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
