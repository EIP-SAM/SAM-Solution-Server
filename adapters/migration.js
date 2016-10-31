//
// Migration adapter
//
const Sequelize = require('sequelize');
const UsersModel = require('../models/users');
MigrationModel = require('../models/migration');

//
// Get all the migration order by migrationDate DESC
//
module.exports.getMigrations = function () {
  return MigrationModel.findAll({
    order: [['migrationDate', 'DESC']],
    include: [{
      model: UsersModel,
      as: 'user',
      attributes: ['id', 'name', 'email', 'isAdmin'],
      where: { userId: Sequelize.col('user.id') },
    }],
  });
};

//
// Get migration by his id
//
module.exports.getMigrationById = function(migrationId) {
  return MigrationModel.findById(migrationId, {
    order: [['migrationDate', 'DESC']],
    include: [{
      model: UsersModel,
      as: 'user',
      attributes: ['id', 'name', 'email', 'isAdmin'],
      where: { userId: Sequelize.col('user.id') },
    }],
  });
};

//
// Create a migration
//
module.exports.createMigration = function(migrationObj) {
  return MigrationModel.create(migrationObj);
};

//
// Edit migration by his id
//
module.exports.editMigrationById = function(migrationObj) {
  return MigrationModel.update(migrationObj, {
    where: { id: migrationObj.migrationId },
  });
};

//
// Delete migration by id
//
module.exports.deleteMigrationById = function(migrationId) {
  return MigrationModel.destroy({
    where: { id: migrationId },
  });
};
