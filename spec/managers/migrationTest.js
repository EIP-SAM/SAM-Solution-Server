//
// Unit test for migration manager
//
const migrationAdapter = require('../../adapters/migration');
const migrationManager = require('../../managers/migration');
const MigrationModel = require('../../models/migration');

describe('getMigrations', function () {
  it('should return a promise', function () {
    let migrations = migrationManager.getMigrations();

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called getMigrations once', function () {
    spyOn(migrationAdapter, 'getMigrations');
    migrationManager.getMigrations()
    expect(migrationAdapter.getMigrations).toHaveBeenCalledTimes(1);
  });
});

describe('getMigrationById', function () {
  var migrationId;

  beforeAll(function () {
    migrationId = 0;
  });

  it('should return a promise', function () {
    let migrations = migrationManager.getMigrationById(migrationId);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called getMigrationById once', function () {
    spyOn(migrationAdapter, 'getMigrationById');
    migrationManager.getMigrationById(migrationId)
    expect(migrationAdapter.getMigrationById).toHaveBeenCalledTimes(1);
  });
});

describe('getMigrationOrderedByStatus', function () {
  var order;

  beforeAll(function () {
    order = 'done';
  });

  it('should return a promise', function () {
    let migrations = migrationManager.getMigrationOrderedByStatus(order);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called getMigrationOrderedByStatus once', function () {
    spyOn(migrationAdapter, 'getMigrationOrderedByStatus');
    migrationManager.getMigrationOrderedByStatus(order)
    expect(migrationAdapter.getMigrationOrderedByStatus).toHaveBeenCalledTimes(1);
  });
});

describe('getMigrationOrderedByImageName', function () {
  var order;

  beforeAll(function () {
    order = 'done';
  });

  it('should return a promise', function () {
    let migrations = migrationManager.getMigrationOrderedByImageName(order);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called getMigrationOrderedByImageName once', function () {
    spyOn(migrationAdapter, 'getMigrationOrderedByImageName');
    migrationManager.getMigrationOrderedByImageName(order)
    expect(migrationAdapter.getMigrationOrderedByImageName).toHaveBeenCalledTimes(1);
  });
});

describe('createMigration', function () {
  var migrationObj;

  beforeAll(function () {
    migrationObj = {
      userId: 0,
      imageId: 0,
      migrationDate: new Date(),
      status: 'done',
      comment: '',
    };
  });

  it('should return a promise', function () {
    let migrations = migrationManager.createMigration(migrationObj);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called createMigration once', function () {
    spyOn(migrationAdapter, 'createMigration');
    migrationManager.createMigration(migrationObj)
    expect(migrationAdapter.createMigration).toHaveBeenCalledTimes(1);
  });
});

describe('editMigrationById', function () {
  var migrationObj;

  beforeAll(function () {
    migrationObj = {
      migrationId: 0,
      userId: 0,
      imageId: 0,
      migrationDate: new Date(),
      status: 'done',
      comment: '',
    };
  });

  it('should return a promise', function () {
    let migrations = migrationManager.editMigrationById(migrationObj);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called editMigrationById once', function () {
    spyOn(migrationAdapter, 'editMigrationById');
    migrationManager.editMigrationById(migrationObj)
    expect(migrationAdapter.editMigrationById).toHaveBeenCalledTimes(1);
  });
});

describe('deleteMigrationById', function () {
  var migrationId;

  beforeAll(function () {
    migrationId = 0;
  });

  it('should return a promise', function () {
    let migrations = migrationManager.deleteMigrationById(migrationId);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called deleteMigrationById once', function () {
    spyOn(migrationAdapter, 'deleteMigrationById');
    migrationManager.deleteMigrationById(migrationId)
    expect(migrationAdapter.deleteMigrationById).toHaveBeenCalledTimes(1);
  });
});
