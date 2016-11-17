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
// Launch getMigrationOrderByFilter method from adapters
//
module.exports.getMigrationOrderByFilter = function (filterObj) {
  return migrationAdapter.getMigrationOrderByFilter(filterObj);
}

//
// Launch createMigration method from adapters
// @properties:
// - userId
// - imageId
// - migrationDate
// - status
// - comment
//
module.exports.createMigration = function (migrationObj) {
  return migrationAdapter.createMigration(migrationObj);
}

//
// Launch getMigrationById method from adapters
// @properties:
// - migrationId
// - userId
// - imageId
// - migrationDate
// - status
// - comment
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
