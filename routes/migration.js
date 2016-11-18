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
  app.get('/api/logged-in/admin/migrations', function (req, res) {
    let promise = migrationController.getMigrations();

    promise.then(function (migrations) {
      res.json({
        migrations,
      });
    }).catch(function (err) {
      logger.error(err);
      res.json({
        error: true,
        err,
      });
    });
  });

  //
  // Get migration order by filter
  //
  app.get('/api/logged-in/admin/migrations/filter', function (req, res) {
    if (req.query.filterObj === undefined) {
      logger.warn('You have to give at least an filterObj with a name and a order');
      res.json({
        error: true,
        err: 'You have to give at least an filterObj with a name and a order',
      });
    } else {
      let filterObj = JSON.parse(req.query.filterObj);
      let promise = migrationController.getMigrationOrderByFilter(filterObj);

      promise.then(function (migrations) {
        res.json({
          migrations,
        });
      }).catch(function (err) {
        logger.error(err);
        res.json({
          error: true,
          err,
        });
      });
    }
  });

  //
  // Get migration by id
  //
  app.get('/api/logged-in/migration/admin/:migration_id', function (req, res) {
    let promise = migrationController.getMigrationById(req.params.migration_id);

    promise.then(function (migration) {
      res.json({
        migration,
      });
    }).catch(function (err) {
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
  // - migrationDate
  // - status
  // Except for the migrationId, each property can be undefined
  //
  app.post('/api/logged-in/admin/migration/add', function (req, res) {
    let migrationObj = req.body.migrationObj;
    let promise = migrationController.createMigration(migrationObj);

    promise.then(function (migration) {
      res.json({
        migration,
      });
    }).catch(function (err) {
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
  // - migrationDate
  // - status
  // Except for the migrationId, each property can be undefined
  //
  app.post('/api/logged-in/migration/admin/:migration_id/edit', function (req, res) {
    let migrationObj = JSON.parse(req.body.migrationObj);

    let promise = migrationController.editMigrationById(migrationObj);

    promise.then(function (migration) {
      res.json({
        migration,
      });
    }).catch(function (err) {
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
  app.delete('/api/logged-in/admin/:migration_id/delete', function (req, res) {
    let promise = migrationController.deleteMigrationById(req.params.migration_id);

    promise.then(function (migration) {
      res.json( {
        migration,
      });
    }).catch(function (err) {
      logger.error(err);
      res.json({
        error: true,
        err,
      });
    });
  });
};
