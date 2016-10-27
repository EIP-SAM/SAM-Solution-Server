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
// Launch getMigrationById method from managers
// Get an object as parameters with properties:
// - migrationId
// - userId
// - migrationDate
// - status
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
