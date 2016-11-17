//
// Unit test for migration adapter
//
const MigrationModel = require('../../models/migration');
const migrationAdapter = require('../../adapters/migration');

describe('getMigrations', function () {
  it('should return a promise', function () {
    let migrations = migrationAdapter.getMigrations();

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(MigrationModel, 'findAll');
    migrationAdapter.getMigrations();
    expect(MigrationModel.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('getMigrationById', function () {

  var migrationId;

  beforeAll(function () {
    migrationId = 0;
  });

  it('should return a promise', function () {
    let migrations = migrationAdapter.getMigrationById(migrationId);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called findById once', function () {
    spyOn(MigrationModel, 'findById');
    migrationAdapter.getMigrationById(migrationId);
    expect(MigrationModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('getMigrationOrderedByStatus', function () {

  var order;

  beforeAll(function () {
    order = 'DESC';
  });

  it('should return a promise', function () {
    let migrations = migrationAdapter.getMigrationOrderedByStatus(order);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(MigrationModel, 'findAll');
    migrationAdapter.getMigrationOrderedByStatus(order);
    expect(MigrationModel.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('getMigrationOrderedByImageName', function () {

  var order;

  beforeAll(function () {
    order = 'DESC';
  });

  it('should return a promise', function () {
    let migrations = migrationAdapter.getMigrationOrderedByImageName(order);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(MigrationModel, 'findAll');
    migrationAdapter.getMigrationOrderedByImageName(order);
    expect(MigrationModel.findAll).toHaveBeenCalledTimes(1);
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
    let migrations = migrationAdapter.createMigration(migrationObj);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called update once', function () {
    spyOn(MigrationModel, 'create');
    let migrations = migrationAdapter.createMigration(migrationObj);
    expect(MigrationModel.create).toHaveBeenCalledTimes(1);
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
    let migrations = migrationAdapter.editMigrationById(migrationObj);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called update once', function () {
    spyOn(MigrationModel, 'update');
    let migrations = migrationAdapter.editMigrationById(migrationObj);
    expect(MigrationModel.update).toHaveBeenCalledTimes(1);
  });
});

describe('deleteMigrationById', function () {

  var migrationId;

  beforeAll(function () {
    migrationId = 0;
  });

  it('should return a promise', function () {
    let migrations = migrationAdapter.deleteMigrationById(migrationId);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called destroy once', function () {
    spyOn(MigrationModel, 'destroy');
    migrationAdapter.deleteMigrationById(migrationId);
    expect(MigrationModel.destroy).toHaveBeenCalledTimes(1);
  });
});
