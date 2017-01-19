//
// Migration manager
//
const migrationAdapter = require('../adapters/migration');
const migrationWorker = require('../workers/migration');
const userAdapter = require('../adapters/users');
const imageAdapter = require('../adapters/image');

const logger = require('../libs/bunyan').setModuleName('Migration');

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
module.exports.createMigration = (migrationObj, isInstant) => new Promise((fullfill, reject) => {
  migrationAdapter.createMigration(migrationObj).then((newMigration) => {
    fullfill(newMigration);
    if (isInstant) {
      userAdapter.findById(newMigration.userId).then((user) => {
        imageAdapter.getImageById(newMigration.imageId).then((image) => {
          migrationWorker.execMigration(user.name, image.fileName).then((msg) => {
            newMigration.status = 'in progress';
            newMigration.comment = `${msg}`;
            newMigration.save();
            logger.info(msg);
          }).catch((err) => {
            newMigration.status = 'failed';
            newMigration.comment = `${err}`;
            newMigration.save();
            logger.error(err);
          });
        }).catch((err) => {
          logger.warn(`Unable to retrieve image for migration (IMAGE ID : ${migrationObj.imageId}) : ${err}`);
        });
      }).catch((err) => {
        logger.warn(`Unable to retrieve image for migration (IMAGE ID : ${migrationObj.imageId}) : ${err}`);
      });
    }
  }).catch((err) => {
    reject(err);
  });
});

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

//
// Handle regular migration check in database
//
module.exports.initCheckMigration = () => {
  setInterval(() => {
    migrationAdapter.getPlannedMigrationBeforeNow().then((migrations) => {
      migrations.forEach((migration) => {
        const obj = {};
        obj.migrationId = migration.id;
        migrationWorker.execMigration(migration.user.name, migration.image.fileName).then((msg) => {
          obj.status = 'in progress';
          obj.comment = `${msg}`;
          migrationAdapter.editMigrationById(obj);
          logger.info(msg);
        }).catch((err) => {
          obj.status = 'failed';
          obj.comment = `${err}`;
          migrationAdapter.editMigrationById(obj);
          logger.error(err);
        });
      });
    }).catch((err) => {
      logger.error(`Unable to start regular check migration : ${err}`);
    });
  }, 60000);
};
