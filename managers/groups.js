const GroupsAdapter = require('../adapters/groups');
const UsersAdapter = require('../adapters/users');
const rightsManager = require('./rights');
const logger = require('../libs/bunyan').setModuleName('Users & Rights');

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

module.exports.retrieveAllGroups = function (errors) {
  return function (req, res) {
    GroupsAdapter.findAll().then(function (groups) {
      const output = { groups: groups };

      if (errors) {
        output.errors = errors;
      }

      return res.status(200).json(output);
    }).catch(function (error) {
      return res.status(500).json({ error: 'Internal server error' });
    });
  };
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

function stopForEachPromise(obj, newError, fulfill) {
  if (newError) {
    obj.errors.push({ error: newError });
  }

  if (++obj.i == obj.array.length) {
    fulfill(obj.errors.length ? obj.errors : null);
  }
}

function createGroups(groups) {
  return new Promise(function (fulfill, reject) {
    const obj = { errors: [], i: 0, array: groups };

    groups.forEach(function (group) {
      createGroup(group).then(function (newGroup) {
        if (group.users && group.users.constructor == Array) {
          UsersAdapter.reassignUsersToGroup(newGroup, group.users).then(function () {
            logger.info({ group: { id: newGroup.id, name: newGroup.name } }, 'New group created (by an administrator)');
            stopForEachPromise(obj, null, fulfill);
          }).catch(function (error) {
            logger.warn({ error: error }, 'Error during group creation (by an administrator)');
            stopForEachPromise(obj, null, fulfill);
          });
        } else {
          logger.info({ group: { id: newGroup.id, name: newGroup.name } }, 'New group created (by an administrator)');
          stopForEachPromise(obj, null, fulfill);
        }
      }).catch(function (error) {
        logger.warn('Error during new group creation (by an administrator): name: ' + group.name + 'error: ' + error);
        stopForEachPromise(obj, error, fulfill);
      });
    });
  });
}

module.exports.createGroups = function () {
  return function (req, res) {
    if (req.body.groups && req.body.groups.constructor == Array) {
      createGroups(req.body.groups).then(function (errors) {
        return module.exports.retrieveAllGroups(errors)(req, res);
      });
    } else {
      logger.error('Error during new group creation (by an administrator): ' + 'Invalid request');
      return res.status(405).json({ error: 'Invalid request' });
    }
  };
};

function updateGroups(groups) {
  return new Promise(function (fulfill, reject) {
    const obj = { errors: [], i: 0, array: groups };

    groups.forEach(function (groupUpdate) {
      GroupsAdapter.findById(groupUpdate.id).then(function (group) {
        if (group) {
          group.name = groupUpdate.name ? groupUpdate.name : group.name;
          group.saveAndRestoreMode = groupUpdate.saveAndRestoreMode ? groupUpdate.saveAndRestoreMode : group.saveAndRestoreMode;
          group.migrationMode = groupUpdate.migrationMode ? groupUpdate.migrationMode : group.migrationMode;
          group.softwarePackagesMode = groupUpdate.softwarePackagesMode ? groupUpdate.softwarePackagesMode : group.softwarePackagesMode;
          group.save().then(function (group) {
            if (groupUpdate.users && groupUpdate.users.constructor == Array) {
              UsersAdapter.reassignUsersToGroup(group, groupUpdate.users).then(function () {
                logger.info({ group: { id: group.id, name: group.name } }, 'Group updated (by an administrator)');
                stopForEachPromise(obj, null, fulfill);
              }).catch(function (error) {
                logger.warn({ error: error }, 'Error during group update (by an administrator)');
                stopForEachPromise(obj, null, fulfill);
              });
            } else {
              logger.info({ group: { id: group.id, name: group.name } }, 'Group updated (by an administrator)');
              stopForEachPromise(obj, null, fulfill);
            }
          });
        } else {
          logger.warn({ group: { id: groupUpdate.id }, error: 'Group id ' + groupUpdate.id + ' not found' }, 'Error during group update (by an administrator)');
          stopForEachPromise(obj, 'Group id ' + groupUpdate.id + ' not found', fulfill);
        }
      });
    });
  });
}

module.exports.updateGroups = function () {
  return function (req, res) {
    if (req.body.groups && req.body.groups.constructor == Array) {
      updateGroups(req.body.groups).then(function (errors) {
        return module.exports.retrieveAllGroups(errors)(req, res);
      });
    } else {
      logger.error('Error during group update (by an administrator): Invalid request');
      return res.status(405).json({ error: 'Invalid request' });
    }
  };
};

function deleteGroups(groups) {
  return new Promise(function (fulfill, reject) {
    const obj = { errors: [], i: 0, array: groups };

    groups.forEach(function (groupId) {
      GroupsAdapter.findById(groupId).then(function (group) {
        if (group) {
          group.destroy().then(function () {
            logger.info('Group deleted (by an administrator): id: ' + group.id + ' name: ' + group.name);
            stopForEachPromise(obj, null, fulfill);
          });
        } else {
          logger.warn('Error during group deletion (by an administrator): id: ' + groupId + 'not found');
          stopForEachPromise(obj, 'Group id ' + groupId + ' not found', fulfill);
        }
      }).catch(function (error) {
        logger.warn('Error during group deletion (by an administrator): id: ' + groupId + 'not found');
        stopForEachPromise(obj, 'Group id ' + groupId + ' not found', fulfill);
      });
    });
  });
}

module.exports.deleteGroups = function () {
  return function (req, res) {
    if (req.body.groups && req.body.groups.constructor == Array) {
      deleteGroups(req.body.groups).then(function (errors) {
        return module.exports.retrieveAllGroups(errors)(req, res);
      });
    } else {
      logger.warn('Error during group deletion (by an administrator): Invalid request');
      return res.status(405).json({ error: 'Invalid request' });
    }
  };
};

function addUsersToGroup(groupId, users) {
  return new Promise(function (fulfill, reject) {
    const obj = { errors: [], i: 0, array: users };

    GroupsAdapter.findById(groupId).then(function (group) {
      if (group) {
        users.forEach(function (userId) {
          UsersAdapter.findById(userId).then(function (user) {
            if (user) {
              user.addGroups([group]).then(function () {
                stopForEachPromise(obj, null, fulfill);
              });
            } else {
              stopForEachPromise(obj, 'User id ' + userId + ' not found', fulfill);
            }
          }).catch(function (error) {
            stopForEachPromise(obj, error, fulfill);
          });
        });
      } else {
        reject('Group id ' + groupId + ' not found');
      }
    }).catch(function (error) {
      reject(error);
    });
  });
}

module.exports.addUsersToGroup = function () {
  return function (req, res) {
    if (req.body.group && req.body.users && req.body.users.constructor == Array) {
      addUsersToGroup(req.body.group, req.body.users).then(function (errors) {
        logger.info('Users added to group (by an administrator): id: ' + req.body.group);
        return module.exports.retrieveAllGroups(errors)(req, res);
      }).catch(function (error) {
        logger.warn('Error during user addition to group (by an administrator): ' + error);
        return res.status(405).json({ error: error });
      });
    } else {
      logger.error('Error during user addition to group (by an administrator): Invalid request');
      return res.status(405).json({ error: 'Invalid request' });
    }
  };
};

module.exports.retrieveGroup = function () {
  return function (req, res) {
    if (req.query.id) {
      GroupsAdapter.findById(req.query.id).then(function (group) {
        if (group) {
          return res.status(200).json(group);
        } else {
          logger.setUser({ id: req.user.id, name: req.user.name }).error('Group not found');
          return res.status(500).json({ error: 'Group not found' });
        }
      }).catch(function (error) {
        logger.setUser({ id: req.user.id, name: req.user.name }).error(error);
        return res.status(500).json({ error: error });
      });
    } else {
      logger.setUser({ id: req.user.id, name: req.user.name }).error('Invalid request');
      return res.status(405).json({ error: 'Invalid request' });
    }
  };
};

module.exports.updateGroup = function () {
  return function (req, res) {
    console.log(req.body);
    if (req.body.id) {
      GroupsAdapter.findById(req.body.id).then(function (group) {
        if (group) {
          group.name = req.body.name ? req.body.name : group.name;
          group.saveAndRestoreMode = req.body.saveAndRestoreMode ? req.body.saveAndRestoreMode : group.saveAndRestoreMode;
          group.migrationMode = req.body.migrationMode ? req.body.migrationMode : group.migrationMode;
          group.softwarePackagesMode = req.body.softwarePackagesMode ? req.body.softwarePackagesMode : group.softwarePackagesMode;
          group.save().then(function (group) {
            if (req.body.users && req.body.users.constructor == Array) {
              UsersAdapter.reassignUsersToGroup(group, req.body.users).then(function () {
                logger.info({ group: { id: group.id, name: group.name } }, 'Group updated (by an administrator)');
                req.query.id = req.body.id;
                return module.exports.retrieveGroup()(req, res);
              }).catch(function (error) {
                logger.warn({ error: error }, 'Error during group update (by an administrator)');
                return res.status(500).json({ message: 'Internal server error' });
              });
            } else {
              logger.info({ group: { id: group.id, name: group.name } }, 'Group updated (by an administrator)');
              return res.status(200).json(group);
            }
          });
        } else {
          logger.warn({ group: { id: req.body.id }, error: 'Group id ' + req.body.id + ' not found' }, 'Error during group update (by an administrator)');
          return res.status(404).json({ message: 'Group id ' + req.body.id + ' not found' });
        }
      });
    } else {
      logger.setUser({ id: req.user.id, name: req.user.name }).error('Invalid request');
      return res.status(405).json({ error: 'Invalid request' });
    }
  };
};

module.exports.deleteGroup = function () {
  return function (req, res) {
    if (req.body.id) {
      GroupsAdapter.findById(req.body.id).then(function (group) {
        if (group) {
          group.destroy().then(function () {
            logger.info('Group deleted (by an administrator): id: ' + group.id + ' name: ' + group.name);
            return res.status(200).json({ message: 'Success' });
          });
        } else {
          logger.warn('Error during group deletion (by an administrator): id: ' + req.body.id + ' not found');
          return res.status(404).json({ error: 'Group id ' + req.body.id + ' not found' });
        }
      }).catch(function (error) {
        logger.warn('Error during group deletion (by an administrator): id: ' + req.body.id + ' not found');
        return res.status(404).json({ error: 'Group id ' + req.body.id + ' not found' });
      });
    } else {
      logger.setUser({ id: req.user.id, name: req.user.name }).error('Invalid request');
      return res.status(405).json({ error: 'Invalid request' });
    }
  };
};
