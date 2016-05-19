//
// Unit test for restore adapter
//
var RestoreModel = require('../../models/restore');
var restoreAdapter = require('../../adapters/restore');

describe('createRestore', function () {
  var restore;

  beforeEach(function () {
    restore = restoreAdapter.createRestore(1, 1);
  });

  afterEach(function () {
    restore = null;
  });

  it('should not return null or undefined object', function () {
    expect(restore).not.toBeNull();
    expect(restore).toBeDefined();
  });

  it('should return a promise', function () {
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should return a RestoreModel object with right values', function () {
    restoreAdapter.createRestore(1, 1).then(function (asyncRestore) {
      expect(asyncRestore.userId).toEqual(1);
      expect(asyncRestore.saveId).toEqual(1);
      expect(asyncRestore.execDate).toEqual(new Date());
    });
  });

  it('should have called create once', function () {
    spyOn(RestoreModel, 'create');
    restoreAdapter.createRestore(1, 1);
    expect(RestoreModel.create).toHaveBeenCalledTimes(1);
  });
});

describe('restoreIsStart', function () {
  var restore;

  beforeEach(function () {
    restore = restoreAdapter.restoreIsStart(1);
  });

  afterEach(function () {
    restore = null;
  });

  it('should not return null or undefined object', function () {
    expect(restore).not.toBeNull();
    expect(restore).toBeDefined();
  });

  it('should return a promise', function () {
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should return a RestoreModel with isStart boolean at true', function () {
    restoreAdapter.restoreIsStart(1).then(function (asyncRestore) {
      expect(asyncRestore.isStart).toBe(true);
    });
  });

  it('should have called findById once', function () {
    spyOn(RestoreModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(RestoreModel);
    }));

    restoreAdapter.restoreIsStart(1);
    expect(RestoreModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('restoreIsFinish', function () {
  var restore;

  beforeEach(function () {
    restore = restoreAdapter.restoreIsFinish(1);
  });

  afterEach(function () {
    restore = null;
  });

  it('should not return null or undefined object', function () {
    expect(restore).not.toBeNull();
    expect(restore).toBeDefined();
  });

  it('should return a promise', function () {
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should return a RestoreModel with isFinish boolean at true', function () {
    restoreAdapter.restoreIsFinish(1).then(function (asyncRestore) {
      expect(asyncRestore.isFinish).toBe(true);
    });
  });

  it('should have called findById once', function () {
    spyOn(RestoreModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(RestoreModel);
    }));

    restoreAdapter.restoreIsFinish(1);
    expect(RestoreModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('restoreIsSuccess', function () {
  var restore;

  beforeEach(function () {
    restore = restoreAdapter.restoreIsSuccess(1);
  });

  afterEach(function () {
    restore = null;
  });

  it('should not return null or undefined object', function () {
    expect(restore).not.toBeNull();
    expect(restore).toBeDefined();
  });

  it('should return a promise', function () {
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should return a RestoreModel with isSuccess boolean at true', function () {
    restoreAdapter.restoreIsSuccess(1).then(function (asyncRestore) {
      expect(asyncRestore.isSuccess).toBe(true);
    });
  });

  it('should have called findById once', function () {
    spyOn(RestoreModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(RestoreModel);
    }));

    restoreAdapter.restoreIsSuccess(1);
    expect(RestoreModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('getAllRestore', function () {
  it('should return a promise', function () {
    var restore = restoreAdapter.getAllRestore();
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(RestoreModel, 'findAll');
    restoreAdapter.getAllRestore();
    expect(RestoreModel.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('getRestoreByUser', function () {
  it('should return a promise', function () {
    var restore = restoreAdapter.getRestoreByUser(1);
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(RestoreModel, 'findAll');
    restoreAdapter.getRestoreByUser();
    expect(RestoreModel.findAll).toHaveBeenCalledTimes(1);
  });

});
