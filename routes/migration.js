//
// migration route
//
const migrationController = require('../controllers/migration');

//
// Logger configuration
//
const logger = require('../libs/bunyan').setModuleName('migration');

module.exports = function initMigrationRoutes(app) {
  //
  // Get all migrations
  //
  app.get('/api/logged-in/admin/migrations', (req, res) => {
    const promise = migrationController.getMigrations();

    promise.then((migrations) => {
      res.json({
        migrations,
      });
    }).catch((err) => {
      logger.error(err);
      res.json({
        error: true,
        err,
      });
    });
  });

  //
  // Get migration order by filter
  // @parameters:
  // - filterObj, object containing:
  //   - filterObj.modelName, if there is a foreignKey you have to put the model name
  //   - filterObj.name, name of the filter
  //   - filterObj.order, ASC or DESC
  //
  app.get('/api/logged-in/admin/migrations/filter', (req, res) => {
    if (req.query.filterObj === undefined) {
      logger.warn('You have to give at least an filterObj with a name and a order');
      res.json({
        error: true,
        err: 'You have to give at least an filterObj with a name and a order',
      });
    } else {
      const filterObj = JSON.parse(req.query.filterObj);
      const promise = migrationController.getMigrationOrderByFilter(filterObj);

      promise.then((migrations) => {
        res.json({
          migrations,
        });
      }).catch((err) => {
        logger.error(err);
        res.json({
          error: true,
          err,
        });
      });
    }
  });

  //
  // Get migrations group by status
  //
  app.get('/api/logged-in/admin/migrations/statistics/status', (req, res) => {
    const promise = migrationController.getMigrationsGroupByStatus();

    promise.then((migrations) => {
      res.json({
        migrations,
      });
    }).catch((err) => {
      logger.error(err);
      res.json({
        error: true,
        err,
      });
    });
  });

  //
  // Get migration by id
  //
  app.get('/api/logged-in/admin/migration/:migration_id', (req, res) => {
    const promise = migrationController.getMigrationById(req.params.migration_id);

    promise.then((migration) => {
      res.json({
        migration,
      });
    }).catch((err) => {
      logger.error(err);
      res.json({
        error: true,
        err,
      });
    });
  });

  //
  // Create migration
  // @parameters:
  // - userId
  // - imageId
  // - migrationDate
  // - status
  // - comment
  // Except for the migrationId, each property can be undefined
  //
  app.post('/api/logged-in/admin/migration/add', (req, res) => {
    const migrationObj = req.body.migrationObj;
    const isInstant = req.body.isInstant;
    const promise = migrationController.createMigration(migrationObj, isInstant);
    console.log(isInstant);
    promise.then((migration) => {
      res.json({
        migration,
      });
    }).catch((err) => {
      logger.error(err);
      res.json({
        error: true,
        err,
      });
    });
  });

  //
  // Edit migration by id
  // @parameters:
  // - migrationId
  // - userId
  // - imageId
  // - migrationDate
  // - status
  // - comment
  // Except for the migrationId, each property can be undefined
  //
  app.post('/api/logged-in/admin/migration/:migration_id/edit', (req, res) => {
    const migrationObj = req.body.migrationObj;

    const promise = migrationController.editMigrationById(migrationObj);

    promise.then((migration) => {
      res.json({
        migration,
      });
    }).catch((err) => {
      logger.error(err);
      res.json({
        error: true,
        err,
      });
    });
  });

  //
  // Delete migration by id
  //
  app.delete('/api/logged-in/admin/migration/:migration_id/delete', (req, res) => {
    const promise = migrationController.deleteMigrationById(req.params.migration_id);

    promise.then((migration) => {
      res.json({
        migration,
      });
    }).catch((err) => {
      logger.error(err);
      res.json({
        error: true,
        err,
      });
    });
  });
};
