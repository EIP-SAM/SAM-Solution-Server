var Sequelize = require('sequelize');
var UsersModel = require('../models/users');
var GroupsModel = require('../models/groups');
require('../models/usersGroupsRelations');

module.exports.findAll = function () {
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
