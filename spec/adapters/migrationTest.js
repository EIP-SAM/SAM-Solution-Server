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
  it('should return a promise', function () {
    let migrationId = 0;
    let migrations = migrationAdapter.getMigrationById(migrationId);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called findById once', function () {
    let migrationId = 0;

    spyOn(MigrationModel, 'findById');
    migrationAdapter.getMigrationById(migrationId);
    expect(MigrationModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('createMigration', function () {
  it('should return a promise', function () {
    let migrationObj = {
      migrationId: 0,
      userId: 0,
      migrationDate: new Date(),
      status: 'done',
      comment: '',
    }

    let migrations = migrationAdapter.createMigration(migrationObj);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called create once', function () {
    let userId = 0;
    let migrationDate = new Date();
    let status = 'done';

    spyOn(MigrationModel, 'create');
    migrationAdapter.createMigration(userId, migrationDate, status);
    expect(MigrationModel.create).toHaveBeenCalledTimes(1);
  });
});

describe('createMigration', function () {
  it('should return a promise', function () {
    let migrationObj = {
      migrationId: 0,
      userId: 0,
      migrationDate: new Date(),
      status: 'done',
      comment: '',
    }

    let migrations = migrationAdapter.createMigration(migrationObj);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called update once', function () {
    let migrationObj = {
      migrationId: 0,
      userId: 0,
      migrationDate: new Date(),
      status: 'done',
      comment: '',
    }

    spyOn(MigrationModel, 'create');
    let migrations = migrationAdapter.createMigration(migrationObj);
    expect(MigrationModel.create).toHaveBeenCalledTimes(1);
  });
});

describe('editMigrationById', function () {
  it('should return a promise', function () {
    let migrationObj = {
      migrationId: 0,
      userId: 0,
      migrationDate: new Date(),
      status: 'done',
      comment: '',
    }

    let migrations = migrationAdapter.editMigrationById(migrationObj);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called update once', function () {
    let migrationObj = {
      migrationId: 0,
      userId: 0,
      migrationDate: new Date(),
      status: 'done',
      comment: '',
    }

    spyOn(MigrationModel, 'update');
    let migrations = migrationAdapter.editMigrationById(migrationObj);
    expect(MigrationModel.update).toHaveBeenCalledTimes(1);
  });
});

describe('deleteMigrationById', function () {
  it('should return a promise', function () {
    let migrationId = 0;
    let migrations = migrationAdapter.deleteMigrationById(migrationId);

    expect(typeof migrations.then === 'function').toBeTruthy();
  });

  it('should have called destroy once', function () {
    let migrationId = 0;

    spyOn(MigrationModel, 'destroy');
    migrationAdapter.deleteMigrationById(migrationId);
    expect(MigrationModel.destroy).toHaveBeenCalledTimes(1);
  });
});
