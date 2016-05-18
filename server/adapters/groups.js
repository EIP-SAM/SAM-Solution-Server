const Sequelize = require('sequelize');
const UsersModel = require('../models/users');
const GroupsModel = require('../models/groups');
require('../models/usersGroupsRelations');

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
              group.users = groupWithUser.users;
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
  return GroupsModel.findOne({ where: { id: id } });
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
