//
// Unit test for migration manager
//
const migrationManager = require('../../managers/migration');
const migrationController = require('../../controllers/migration');
const MigrationModel = require('../../models/migration');

describe('getMigrations', function () {
  it('should return a promise', function () {
    let migrations = migrationController.getMigrations();

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called getMigrations once', function () {
    spyOn(migrationManager, 'getMigrations');
    migrationController.getMigrations()
    expect(migrationManager.getMigrations).toHaveBeenCalledTimes(1);
  });
});

describe('getMigrationById', function () {
  var migrationId;

  beforeAll(function () {
    migrationId = 0;
  });

  it('should return a promise', function () {
    let migrations = migrationController.getMigrationById(migrationId);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called getMigrationById once', function () {
    spyOn(migrationManager, 'getMigrationById');
    migrationController.getMigrationById(migrationId)
    expect(migrationManager.getMigrationById).toHaveBeenCalledTimes(1);
  });
});

describe('createMigration', function () {
  var migrationObj;

  beforeAll(function () {
    migrationObj = {
      migrationId: 0,
      userId: 0,
      migrationDate: new Date(),
      status: 'done',
      comment: '',
    };
  });

  it('should return a promise', function () {
    let migrations = migrationController.createMigration(migrationObj);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called createMigration once', function () {
    spyOn(migrationManager, 'createMigration');
    migrationController.createMigration(migrationObj)
    expect(migrationManager.createMigration).toHaveBeenCalledTimes(1);
  });
});

describe('editMigrationById', function () {
  var migrationObj;

  beforeAll(function () {
    migrationObj = {
      migrationId: 0,
      userId: 0,
      migrationDate: new Date(),
      status: 'done',
      comment: '',
    };
  });

  it('should return a promise', function () {
    let migrations = migrationController.editMigrationById(migrationObj);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called editMigrationById once', function () {
    spyOn(migrationManager, 'editMigrationById');
    migrationController.editMigrationById(migrationObj)
    expect(migrationManager.editMigrationById).toHaveBeenCalledTimes(1);
  });
});

describe('deleteMigrationById', function () {
  var migrationId;

  beforeAll(function () {
    migrationId = 0;
  });

  it('should return a promise', function () {
    let migrations = migrationController.deleteMigrationById(migrationId);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called deleteMigrationById once', function () {
    spyOn(migrationManager, 'deleteMigrationById');
    migrationController.deleteMigrationById(migrationId)
    expect(migrationManager.deleteMigrationById).toHaveBeenCalledTimes(1);
  });
});
