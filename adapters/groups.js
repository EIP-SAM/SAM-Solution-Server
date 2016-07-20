const Sequelize = require('sequelize');
const UsersModel = require('../models/users');
const GroupsModel = require('../models/groups');
require('../models/usersGroupsRelations');
const enumMode = require('../managers/rights').enumMode;

module.exports.findAll = function () {
  return new Promise(function (fulfill, reject) {
    GroupsModel.findAll({
      attributes: ['id', 'name', 'saveAndRestoreMode', 'migrationMode', 'softwarePackagesMode'],
    }).then(function (allGroups) {
      module.exports.findAllAssociatedWithUsers()
      .then(function (groupsWithUsers) {
        allGroups.forEach(function (group) {
          groupsWithUsers.forEach(function (groupWithUser) {
            if (groupWithUser.id == group.id) {
              const users = [];

              groupWithUser.users.forEach(function (user) {
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
      }).catch(function (error) {
        reject(error);
      });
    }).catch(function (error) {
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
    where: { id: id },
    include: [{
        model: UsersModel,
        where: { groupId: Sequelize.col('groups.id') },
      },
    ],
  });
};

module.exports.findByName = function (name) {
  return GroupsModel.findOne({ where: { name: name } });
};

module.exports.createGroup = function (name, saveAndRestoreMode, migrationMode, softwarePackagesMode) {
  return GroupsModel.create({
    name: name,
    saveAndRestoreMode: saveAndRestoreMode,
    migrationMode: migrationMode,
    softwarePackagesMode: softwarePackagesMode,
  });
};

module.exports.linkUserAndGroup = function (user, group) {
  return new Promise(function (fulfill, reject) {
    user.addGroups([group]).then(function (user) {
      fulfill(user, group);
    });
  });
};

module.exports.unlinkUsersGroups = function (user) {
  return new Promise(function (fulfill, reject) {
    user.setGroups([]).then(function () {
      fulfill(user);
    });
  });
};

module.exports.createAndLinkGroupAndUser = function (user, group) {
  return new Promise(function (fulfill, reject) {
    module.exports.createGroup(group, enumMode.SIMPLE, enumMode.SIMPLE, enumMode.SIMPLE).then(function (group) {
      module.exports.linkUserAndGroup(user, group).then(function (user, group) {
        fulfill(user, group);
      });
    });
  });
};

function reassignGroupToUser(user, group) {
  return new Promise(function (fulfill, reject) {
    module.exports.findByName(group).then(function (foundGroup) {
      if (foundGroup) {
        module.exports.linkUserAndGroup(user, foundGroup).then(function (user, group) {
          fulfill(user, group);
        });
      } else {
        module.exports.createAndLinkGroupAndUser(user, group).then(function (user, group) {
          fulfill(user, group);
        });
      }
    });
  });
}

module.exports.reassignGroupsToUser = function (user, groups) {
  return new Promise(function (fulfill, reject) {
    module.exports.unlinkUsersGroups(user).then(function (user) {
      var i = 0;

      if (groups.length === 0) {
        reassignGroupToUser(user, user.isAdmin ? 'admin_default' : 'user_default').then(function (user, group) {
          fulfill(user);
        });
      } else {
        groups.forEach(function (group) {
          reassignGroupToUser(user, group).then(function (user, group) {
            if (++i >= groups.length) {
              fulfill(user);
            }
          });
        });
      }
    });
  });
};
