//
// Migration adapter
//
const MigrationModel = require('../models/migration');

//
// Get all the migration order by migrationDate DESC
//
module.exports.getMigrations = function () {
  return MigrationModel.findAll({
    order: [['migrationDate', 'DESC']],
  });
};

//
// Get migration by his id
//
module.exports.getMigrationById = function(migrationId) {
  return MigrationModel.findById(migrationId, {
    order: [['migrationDate', 'DESC']],
  });
}

//
// Create a migration
//
module.exports.createMigration = function(userId, migrationDate, status) {
  return MigrationModel.create({
    userId,
    migrationDate,
    status,
  });
}

//
// Edit migration by his id
//
module.exports.editMigrationById = function(migrationObj) {
  return MigrationModel.update(migrationObj, {
    where: { id: migrationObj.migrationId },
  });
}

//
// Delete migration by id
//
module.exports.deleteMigrationById = function(migrationId) {
  return MigrationModel.destroy({
    where: { id: migrationId },
  });
}
