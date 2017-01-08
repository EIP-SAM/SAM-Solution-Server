const Sequelize = require('sequelize');
const UsersModel = require('../models/users');
const GroupsModel = require('../models/groups');
require('../models/usersGroupsRelations');
const enumMode = require('../managers/rights').enumMode;

module.exports.findAll = function () {
  return new Promise((fulfill, reject) => {
    GroupsModel.findAll({
      attributes: ['id', 'name', 'saveAndRestoreMode', 'migrationMode', 'softwarePackagesMode'],
    }).then((allGroups) => {
      module.exports.findAllAssociatedWithUsers()
      .then((groupsWithUsers) => {
        allGroups.forEach((group) => {
          groupsWithUsers.forEach((groupWithUser) => {
            if (groupWithUser.id == group.id) {
              const users = [];

              groupWithUser.users.forEach((user) => {
                const curratedUser = {};

                curratedUser.id = user.id;
                curratedUser.name = user.name;
                users.push(curratedUser);
              });

              group.dataValues.users = users;
            }
          });
        });

        fulfill(allGroups);
      }).catch((error) => {
        reject(error);
      });
    }).catch((error) => {
      reject(error);
    });
  });
};

module.exports.findAllNotAssociatedWithUsers = function () {
  return GroupsModel.findAll({
    attributes: ['id', 'name', 'saveAndRestoreMode', 'migrationMode', 'softwarePackagesMode'],
  });
};

module.exports.findAllAssociatedWithUsers = function () {
  return GroupsModel.findAll({
    attributes: ['id', 'name', 'saveAndRestoreMode', 'migrationMode', 'softwarePackagesMode'],
    include: [{
      model: UsersModel,
      where: { groupId: Sequelize.col('groups.id') },
    },
    ],
  });
};

module.exports.findById = function (id) {
  return GroupsModel.findOne({
    where: { id },
    include: [{
      model: UsersModel,
      attributes: ['id', 'name'],
    },
    ],
  });
};

module.exports.findByName = function (name) {
  return GroupsModel.findOne({ where: { name } });
};

module.exports.createGroup = function (name, saveAndRestoreMode, migrationMode, softwarePackagesMode) {
  return GroupsModel.create({
    name,
    saveAndRestoreMode,
    migrationMode,
    softwarePackagesMode,
  });
};

module.exports.linkUserAndGroup = function (user, group) {
  return new Promise((fulfill, reject) => {
    user.addGroups([group]).then((user) => {
      fulfill(user, group);
    });
  });
};

module.exports.unlinkUsersGroups = function (user) {
  return new Promise((fulfill, reject) => {
    user.setGroups([]).then(() => {
      fulfill(user);
    });
  });
};

module.exports.createAndLinkGroupAndUser = function (user, group) {
  return new Promise((fulfill, reject) => {
    module.exports.createGroup(group, enumMode.SIMPLE, enumMode.SIMPLE, enumMode.SIMPLE).then((group) => {
      module.exports.linkUserAndGroup(user, group).then((user, group) => {
        fulfill(user, group);
      });
    });
  });
};

module.exports.reassignGroupToUser = function (user, group) {
  return new Promise((fulfill, reject) => {
    module.exports.findByName(group).then((foundGroup) => {
      if (foundGroup) {
        module.exports.linkUserAndGroup(user, foundGroup).then((user, group) => {
          fulfill(user, group);
        });
      } else {
        module.exports.createAndLinkGroupAndUser(user, group).then((user, group) => {
          fulfill(user, group);
        });
      }
    });
  });
};

module.exports.reassignGroupsToUser = function (user, groups) {
  return new Promise((fulfill, reject) => {
    module.exports.unlinkUsersGroups(user).then((user) => {
      let i = 0;

      if (groups.length === 0) {
        module.exports.reassignGroupToUser(user, user.isAdmin ? 'admin_default' : 'user_default').then((user, group) => {
          fulfill(user);
        });
      } else {
        groups.forEach((group) => {
          module.exports.reassignGroupToUser(user, group).then((user, group) => {
            if (++i >= groups.length) {
              fulfill(user);
            }
          });
        });
      }
    });
  });
};
