//
// migration controller
//
const migrationManager = require('../managers/migration');

//
// Launch getMigrations method from managers
//
module.exports.getMigrations = function () {
    return migrationManager.getMigrations();
}

//
// Launch getMigrationById method from managers
//
module.exports.getMigrationById = function (migrationId) {
  return migrationManager.getMigrationById(migrationId);
}

//
// Launch createMigration method from managers
// @properties:
// - userId
// - imageId
// - migrationDate
// - status
// - path
// - comment
//
module.exports.createMigration = function (migrationObj) {
  return migrationManager.createMigration(migrationObj);
}

//
// Launch getMigrationById method from managers
// @properties:
// - migrationId
// - userId
// - imageId
// - migrationDate
// - status
// - path
// - comment
// Except for the migrationId, each property can be undefined
//
module.exports.editMigrationById = function (migrationObj) {
  return migrationManager.editMigrationById(migrationObj);
}

//
// Launch deleteMigrationById method from managers
//
module.exports.deleteMigrationById = function (migrationId) {
  return migrationManager.deleteMigrationById(migrationId);
}
