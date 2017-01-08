//
// Migration manager
//
const migrationAdapter = require('../adapters/migration');

//
// Launch getMigrations method from adapters
//
module.exports.getMigrations = () => migrationAdapter.getMigrations();

//
// Launch getMigrationById method from adapters
//
module.exports.getMigrationById = migrationId => migrationAdapter.getMigrationById(migrationId);

//
// Launch getMigrationOrderByFilter method from adapters
//
module.exports.getMigrationOrderByFilter = filterObj => migrationAdapter.getMigrationOrderByFilter(filterObj);

//
// Launch getMigrationsGroupByStatus method from adapters
//
module.exports.getMigrationsGroupByStatus = () => migrationAdapter.getMigrationsGroupByStatus();

//
// Launch createMigration method from adapters
// @properties:
// - userId
// - imageId
// - migrationDate
// - status
// - comment
//
module.exports.createMigration = migrationObj => migrationAdapter.createMigration(migrationObj);

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
module.exports.editMigrationById = migrationObj => migrationAdapter.editMigrationById(migrationObj);

//
// Launch deleteMigrationById method from adapters
//
module.exports.deleteMigrationById = migrationId => migrationAdapter.deleteMigrationById(migrationId);
