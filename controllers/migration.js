//
// migration controller
//
const migrationManager = require('../managers/migration');

//
// Launch getMigrations method from managers
//
module.exports.getMigrations = () => migrationManager.getMigrations();

//
// Launch getMigrationById method from managers
//
module.exports.getMigrationById = migrationId => migrationManager.getMigrationById(migrationId);

//
// Launch getMigrationOrderByFilter method from managers
//
module.exports.getMigrationOrderByFilter = order => migrationManager.getMigrationOrderByFilter(order);

//
// Launch getMigrationsGroupByStatus method from managers
//
module.exports.getMigrationsGroupByStatus = () => migrationManager.getMigrationsGroupByStatus();

//
// Launch createMigration method from managers
// @properties:
// - userId
// - imageId
// - migrationDate
// - status
// - comment
//
module.exports.createMigration = migrationObj => migrationManager.createMigration(migrationObj);

//
// Launch getMigrationById method from managers
// @properties:
// - migrationId
// - userId
// - imageId
// - migrationDate
// - status
// - comment
// Except for the migrationId, each property can be undefined
//
module.exports.editMigrationById = migrationObj => migrationManager.editMigrationById(migrationObj);

//
// Launch deleteMigrationById method from managers
//
module.exports.deleteMigrationById = migrationId => migrationManager.deleteMigrationById(migrationId);
