const GroupsAdapter = require('../adapters/groups');
const UsersAdapter = require('../adapters/users');
const rightsManager = require('./rights');
const logger = require('../libs/bunyan').setModuleName('Users & Rights');

const enumMode = rightsManager.enumMode;

function newGroupIsInvalid(group) {
  const name = group.name ? group.name : '';
  const rights = [group.saveAndRestoreMode, group.migrationMode, group.softwarePackagesMode];

  for (let i = 0; i !== rights.length; ++i) {
    if (rights[i] !== enumMode.SIMPLE && rights[i] !== enumMode.ADVANCED) {
      return `Invalid right ${rights[i]}`;
    }
  }

  if (name === '') {
    return 'Invalid name';
  }

  return null;
}

function createGroup(newGroup) {
  return new Promise((fulfill, reject) => {
    let error = null;

    error = newGroupIsInvalid(newGroup);
    if (error) {
      reject(error);
    }

    GroupsAdapter.findByName(newGroup.name)
    .then((group) => {
      if (!group) {
        GroupsAdapter.createGroup(newGroup.name, newGroup.saveAndRestoreMode, newGroup.migrationMode, newGroup.softwarePackagesMode)
        .then((grp) => {
          fulfill(grp);
        });
      } else {
        reject('A group with this name already exists');
      }
    });
  });
}

function initUserDefaultGroup() {
  return createGroup({
    name: 'user_default',
    saveAndRestoreMode: enumMode.SIMPLE,
    migrationMode: enumMode.SIMPLE,
    softwarePackagesMode: enumMode.SIMPLE,
  });
}

// called at the requirement of the file
initUserDefaultGroup().catch(() => {
  logger.debug('user_default already created');
});

function initAdminDefaultGroup() {
  return createGroup({
    name: 'admin_default',
    saveAndRestoreMode: enumMode.ADVANCED,
    migrationMode: enumMode.ADVANCED,
    softwarePackagesMode: enumMode.ADVANCED,
  });
}

// called at the requirement of the file
initAdminDefaultGroup().catch(() => {
  logger.debug('user_default already created');
});

module.exports.retrieveAllGroups = errors => (req, res) => {
  GroupsAdapter.findAll().then((groups) => {
    const output = { groups };

    if (errors) {
      output.errors = errors;
    }

    return res.status(200).json(output);
  }).catch(() => res.status(500).json({ error: 'Internal server error' }));
};

function stopForEachPromise(obj, newError, fulfill) {
  if (newError) {
    obj.errors.push({ error: newError });
  }

  obj.i += 1;
  if (obj.i === obj.array.length) {
    fulfill(obj.errors.length ? obj.errors : null);
  }
}

function createGroups(groups) {
  return new Promise((fulfill) => {
    const obj = { errors: [], i: 0, array: groups };

    groups.forEach((group) => {
      createGroup(group).then((newGroup) => {
        if (group.users && group.users.constructor === Array) {
          UsersAdapter.reassignUsersToGroup(newGroup, group.users).then(() => {
            logger.info({ group: { id: newGroup.id, name: newGroup.name } }, 'New group created (by an administrator)');
            stopForEachPromise(obj, null, fulfill);
          }).catch((error) => {
            logger.warn({ error }, 'Error during group creation (by an administrator)');
            stopForEachPromise(obj, error, fulfill);
          });
        } else {
          logger.info({ group: { id: newGroup.id, name: newGroup.name } }, 'New group created (by an administrator)');
          stopForEachPromise(obj, null, fulfill);
        }
      }).catch((error) => {
        logger.warn(`Error during new group creation (by an administrator): name: ${group.name}error: ${error}`);
        stopForEachPromise(obj, error, fulfill);
      });
    });
  });
}

module.exports.createGroups = () => (req, res) => {
  if (req.body.groups && req.body.groups.constructor === Array) {
    return createGroups(req.body.groups).then(errors => module.exports.retrieveAllGroups(errors)(req, res));
  }
  logger.error('Error during new group creation (by an administrator): Invalid request');
  return res.status(405).json({ error: 'Invalid request' });
};

function updateGroups(groups) {
  return new Promise((fulfill) => {
    const obj = { errors: [], i: 0, array: groups };

    groups.forEach((groupUpdate) => {
      GroupsAdapter.findById(groupUpdate.id).then((group) => {
        if (group) {
          group.name = groupUpdate.name ? groupUpdate.name : group.name;
          group.saveAndRestoreMode = groupUpdate.saveAndRestoreMode ? groupUpdate.saveAndRestoreMode : group.saveAndRestoreMode;
          group.migrationMode = groupUpdate.migrationMode ? groupUpdate.migrationMode : group.migrationMode;
          group.softwarePackagesMode = groupUpdate.softwarePackagesMode ? groupUpdate.softwarePackagesMode : group.softwarePackagesMode;
          group.save().then((grp) => {
            if (groupUpdate.users && groupUpdate.users.constructor === Array) {
              UsersAdapter.reassignUsersToGroup(grp, groupUpdate.users).then(() => {
                logger.info({ grp: { id: grp.id, name: grp.name } }, 'Group updated (by an administrator)');
                stopForEachPromise(obj, null, fulfill);
              }).catch((error) => {
                logger.warn({ error }, 'Error during group update (by an administrator)');
                stopForEachPromise(obj, null, fulfill);
              });
            } else {
              logger.info({ grp: { id: grp.id, name: grp.name } }, 'Group updated (by an administrator)');
              stopForEachPromise(obj, null, fulfill);
            }
          });
        } else {
          logger.warn({ group: { id: groupUpdate.id }, error: `Group id ${groupUpdate.id} not found` }, 'Error during group update (by an administrator)');
          stopForEachPromise(obj, `Group id ${groupUpdate.id} not found`, fulfill);
        }
      });
    });
  });
}

module.exports.updateGroups = () => (req, res) => {
  if (req.body.groups && req.body.groups.constructor === Array) {
    return updateGroups(req.body.groups).then(errors => module.exports.retrieveAllGroups(errors)(req, res));
  }
  logger.error('Error during group update (by an administrator): Invalid request');
  return res.status(405).json({ error: 'Invalid request' });
};

function deleteGroups(groups) {
  return new Promise((fulfill) => {
    const obj = { errors: [], i: 0, array: groups };

    groups.forEach((groupId) => {
      GroupsAdapter.findById(groupId).then((group) => {
        if (group) {
          group.destroy().then(() => {
            logger.info(`Group deleted (by an administrator): id: ${group.id} name: ${group.name}`);
            stopForEachPromise(obj, null, fulfill);
          });
        } else {
          logger.warn(`Error during group deletion (by an administrator): id: ${groupId}not found`);
          stopForEachPromise(obj, `Group id ${groupId} not found`, fulfill);
        }
      }).catch(() => {
        logger.warn(`Error during group deletion (by an administrator): id: ${groupId}not found`);
        stopForEachPromise(obj, `Group id ${groupId} not found`, fulfill);
      });
    });
  });
}

module.exports.deleteGroups = () => (req, res) => {
  if (req.body.groups && req.body.groups.constructor === Array) {
    return deleteGroups(req.body.groups).then(errors => module.exports.retrieveAllGroups(errors)(req, res));
  }
  logger.warn('Error during group deletion (by an administrator): Invalid request');
  return res.status(405).json({ error: 'Invalid request' });
};

function addUsersToGroup(groupId, users) {
  return new Promise((fulfill, reject) => {
    const obj = { errors: [], i: 0, array: users };

    GroupsAdapter.findById(groupId).then((group) => {
      if (group) {
        users.forEach((userId) => {
          UsersAdapter.findById(userId).then((user) => {
            if (user) {
              user.addGroups([group]).then(() => {
                stopForEachPromise(obj, null, fulfill);
              });
            } else {
              stopForEachPromise(obj, `User id ${userId} not found`, fulfill);
            }
          }).catch((error) => {
            stopForEachPromise(obj, error, fulfill);
          });
        });
      } else {
        reject(`Group id ${groupId} not found`);
      }
    }).catch((error) => {
      reject(error);
    });
  });
}

module.exports.addUsersToGroup = () => (req, res) => {
  if (req.body.group && req.body.users && req.body.users.constructor === Array) {
    return addUsersToGroup(req.body.group, req.body.users).then((errors) => {
      logger.info(`Users added to group (by an administrator): id: ${req.body.group}`);
      return module.exports.retrieveAllGroups(errors)(req, res);
    }).catch((error) => {
      logger.warn(`Error during user addition to group (by an administrator): ${error}`);
      return res.status(405).json({ error });
    });
  }
  logger.error('Error during user addition to group (by an administrator): Invalid request');
  return res.status(405).json({ error: 'Invalid request' });
};

module.exports.retrieveGroup = () => (req, res) => {
  if (req.query.id) {
    return GroupsAdapter.findById(req.query.id).then((group) => {
      if (group) {
        return res.status(200).json(group);
      }
      logger.setUser({ id: req.user.id, name: req.user.name }).error('Group not found');
      return res.status(500).json({ error: 'Group not found' });
    }).catch((error) => {
      logger.setUser({ id: req.user.id, name: req.user.name }).error(error);
      return res.status(500).json({ error });
    });
  }
  logger.setUser({ id: req.user.id, name: req.user.name }).error('Invalid request');
  return res.status(405).json({ error: 'Invalid request' });
};

module.exports.updateGroup = () => (req, res) => {
  if (req.body.id) {
    return GroupsAdapter.findById(req.body.id).then((group) => {
      if (group) {
        group.name = req.body.name ? req.body.name : group.name;
        group.saveAndRestoreMode = req.body.saveAndRestoreMode ? req.body.saveAndRestoreMode : group.saveAndRestoreMode;
        group.migrationMode = req.body.migrationMode ? req.body.migrationMode : group.migrationMode;
        group.softwarePackagesMode = req.body.softwarePackagesMode ? req.body.softwarePackagesMode : group.softwarePackagesMode;
        return group.save().then((grp) => {
          if (req.body.users && req.body.users.constructor === Array) {
            return UsersAdapter.reassignUsersToGroup(grp, req.body.users).then(() => {
              logger.info({ grp: { id: grp.id, name: grp.name } }, 'Group updated (by an administrator)');
              req.query.id = req.body.id;
              return module.exports.retrieveGroup()(req, res);
            }).catch((error) => {
              logger.warn({ error }, 'Error during group update (by an administrator)');
              return res.status(500).json({ message: 'Internal server error' });
            });
          }
          logger.info({ grp: { id: grp.id, name: grp.name } }, 'Group updated (by an administrator)');
          return res.status(200).json(grp);
        });
      }
      logger.warn({ group: { id: req.body.id }, error: `Group id ${req.body.id} not found` }, 'Error during group update (by an administrator)');
      return res.status(404).json({ message: `Group id ${req.body.id} not found` });
    });
  }
  logger.setUser({ id: req.user.id, name: req.user.name }).error('Invalid request');
  return res.status(405).json({ error: 'Invalid request' });
};

module.exports.deleteGroup = () => (req, res) => {
  if (req.body.id) {
    return GroupsAdapter.findById(req.body.id).then((group) => {
      if (group) {
        return group.destroy().then(() => {
          logger.info(`Group deleted (by an administrator): id: ${group.id} name: ${group.name}`);
          return res.status(200).json({ message: 'Success' });
        });
      }
      logger.warn(`Error during group deletion (by an administrator): id: ${req.body.id} not found`);
      return res.status(404).json({ error: `Group id ${req.body.id} not found` });
    }).catch(() => {
      logger.warn(`Error during group deletion (by an administrator): id: ${req.body.id} not found`);
      return res.status(404).json({ error: `Group id ${req.body.id} not found` });
    });
  }
  logger.setUser({ id: req.user.id, name: req.user.name }).error('Invalid request');
  return res.status(405).json({ error: 'Invalid request' });
};
