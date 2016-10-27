//
// Migration manager
//
const migrationAdapter = require('../adapters/migration');

//
// Launch getMigrations method from adapters
//
module.exports.getMigrations = function () {
    return migrationAdapter.getMigrations();
}

//
// Launch getMigrationById method from adapters
//
module.exports.getMigrationById = function (migrationId) {
  return migrationAdapter.getMigrationById(migrationId);
}

//
// Launch getMigrationById method from adapters
// Get an object as parameters with properties:
// - migrationId
// - userId
// - migrationDate
// - status
// Except for the migrationId, each property can be undefined
//
module.exports.editMigrationById = function (migrationObj) {
  return migrationAdapter.editMigrationById(migrationObj);
}

//
// Launch deleteMigrationById method from adapters
//
module.exports.deleteMigrationById = function (migrationId) {
  return migrationAdapter.deleteMigrationById(migrationId);
}
