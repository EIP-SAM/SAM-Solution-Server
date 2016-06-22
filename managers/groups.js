const GroupsAdapter = require('../adapters/groups');
const UsersAdapter = require('../adapters/users');
const rightsManager = require('./rights');

const enumMode = rightsManager.enumMode;

initUserDefaultGroup();
initAdminDefaultGroup();

function initUserDefaultGroup() {
  return createGroup({
    name: 'user_default',
    saveAndRestoreMode: enumMode.SIMPLE,
    migrationMode: enumMode.SIMPLE,
    softwarePackagesMode: enumMode.SIMPLE,
  });
}

function initAdminDefaultGroup() {
  return createGroup({
    name: 'admin_default',
    saveAndRestoreMode: enumMode.ADVANCED,
    migrationMode: enumMode.ADVANCED,
    softwarePackagesMode: enumMode.ADVANCED,
  });
}

module.exports.retrieveAllGroups = function (req, res) {
  return new Promise(function (fulfill, reject) {
    GroupsAdapter.findAll().then(function (groups) {
      const errors = req.session.errors;

      req.session.errors = null;
      req.session.save(function () {
        fulfill({ groups: groups, errors: errors });
      });

    });
  });
};

function newGroupIsInvalid(group) {
  const name = group.name ? group.name : '';
  const rights = [group.saveAndRestoreMode, group.migrationMode, group.softwarePackagesMode];

  for (var i = 0; i != rights.length; ++i) {
    if (rights[i] != enumMode.SIMPLE && rights[i] != enumMode.ADVANCED) {
      return 'Invalid right ' + rights[i];
    }
  }

  if (name === '') {
    return 'Invalid name';
  }

  return null;
}

function createGroup(newGroup) {
  return new Promise(function (fulfill, reject) {
    var error = null;

    error = newGroupIsInvalid(newGroup);
    if (error) {
      reject(error);
    }

    GroupsAdapter.findByName(newGroup.name)
    .then(function (group) {
      if (!group) {
        GroupsAdapter.createGroup(newGroup.name, newGroup.saveAndRestoreMode, newGroup.migrationMode, newGroup.softwarePackagesMode)
        .then(function (group) {
          fulfill(group);
        });
      } else {
        reject('A group with this name already exists');
      }
    });
  });
}

module.exports.createGroups = function (params) {
  return function (req, res) {
    if (req.body.groups && req.body.groups.constructor == Array) {
      req.body.groups.forEach(function (group) {
        createGroup(group)
        .then(function (group) {
        }).catch(function (error) {
          pushErrorInUserSession(req, group, error);
        });
      });

      saveSessionAndRedirect(req, res, params.successRedirect);
    } else {
      pushErrorInUserSession(req, req.body, 'Invalid request');
      saveSessionAndRedirect(req, res, params.failureRedirect);
    }
  };
};

module.exports.updateGroups = function (params) {
  return function (req, res) {
    if (req.body.groups && req.body.groups.constructor == Array) {
      req.body.groups.forEach(function (groupUpdate) {

        GroupsAdapter.findById(groupUpdate.id).then(function (group) {
          if (group) {
            group.name = groupUpdate.name ? groupUpdate.name : group.name;
            group.saveAndRestoreMode = groupUpdate.saveAndRestoreMode ? groupUpdate.saveAndRestoreMode : group.saveAndRestoreMode;
            group.migrationMode = groupUpdate.migrationMode ? groupUpdate.migrationMode : group.migrationMode;
            group.softwarePackagesMode = groupUpdate.softwarePackagesMode ? groupUpdate.softwarePackagesMode : group.softwarePackagesMode;
            group.save();
          } else {
            pushErrorInUserSession(req, groupId, 'Group id ' + groupId + ' not found');
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

module.exports.deleteGroups = function (params) {
  return function (req, res) {
    if (req.body.groups && req.body.groups.constructor == Array) {
      req.body.groups.forEach(function (groupId) {
        GroupsAdapter.findById(groupId).then(function (group) {
          if (group) {
            group.destroy();
          } else {
            pushErrorInUserSession(req, groupId, 'Group id ' + groupId + ' not found');
          }
        }).catch(function (error) {
          pushErrorInUserSession(req, groupId, 'Group id ' + groupId + ' not found');
        });
      });

      saveSessionAndRedirect(req, res, params.successRedirect);
    } else {
      pushErrorInUserSession(req, req.body, 'Invalid request');
      saveSessionAndRedirect(req, res, params.failureRedirect);
    }
  };
};

module.exports.addUsersToGroup = function (params) {
  return function (req, res) {
    if (req.body.group && req.body.users && req.body.users.constructor == Array) {
      GroupsAdapter.findById(req.body.group).then(function (group) {
        if (group) {
          req.body.users.forEach(function (userId) {
            UsersAdapter.findById(userId).then(function (user) {
              if (user) {
                user.addGroups([group]);
              } else {
                pushErrorInUserSession(req, userId, 'User id ' + userId + ' not found');
              }
            }).catch(function (error) {
              pushErrorInUserSession(req, userId, error);
            });
          });
        } else {
          pushErrorInUserSession(req, req.body.group, 'Group id ' + req.body.group + ' not found');
        }
      }).catch(function (error) {
        pushErrorInUserSession(req, req.body.group, error);
      });

      saveSessionAndRedirect(req, res, params.successRedirect);
    } else {
      pushErrorInUserSession(req, req.body, 'Invalid request');
      saveSessionAndRedirect(req, res, params.failureRedirect);
    }
  };
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
