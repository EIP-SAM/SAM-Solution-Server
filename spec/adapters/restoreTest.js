//
// Unit test for restore adapter
//
var RestoreModel = require('../../models/restore');
var restoreAdapter = require('../../adapters/restore');
var UserModel = require('../../models/users');

describe('lastUsersRestores', function () {
  it('should return a promise', function () {
    var restore = restoreAdapter.lastUsersRestores();
    expect(typeof restore.then === 'function').toBeTruthy();
  });
  it('should have called findAll once', function () {
    spyOn(UserModel, 'findAll');
    restoreAdapter.lastUsersRestores();
    expect(UserModel.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('historyRestoreByUser', function () {
  it('should return a promise', function () {
    var restore = restoreAdapter.historyRestoreByUser('admin');
    expect(typeof restore.then === 'function').toBeTruthy();
  });
  it('should have called findAll once', function () {
    spyOn(RestoreModel, 'findAll');
    restoreAdapter.historyRestoreByUser('admin');
    expect(RestoreModel.findAll).toHaveBeenCalledTimes(1);
  });
});

// describe('createRestore', function () {
//   var restore;
//
//   beforeEach(function () {
//     restore = restoreAdapter.createRestore(1, 'test.txt');
//   });
//
//   afterEach(function () {
//     restore = null;
//   });
//
//   it('should not return null or undefined object', function () {
//     expect(restore).not.toBeNull();
//     expect(restore).toBeDefined();
//   });
//
//   it('should return a promise', function () {
//     expect(typeof restore.then === 'function').toBeTruthy();
//   });
//
//   it('should return a RestoreModel object with right values', function () {
//     restoreAdapter.createRestore(1, 'test.txt').then(function (asyncRestore) {
//       expect(asyncRestore.userId).toEqual(1);
//       expect(asyncRestore.files).toEqual('test.txt');
//       expect(asyncRestore.execDate).toEqual(new Date());
//     });
//   });
//
//   it('should have called create once', function () {
//     spyOn(RestoreModel, 'create');
//     restoreAdapter.createRestore(1, 'test.txt');
//     expect(RestoreModel.create).toHaveBeenCalledTimes(1);
//   });
// });

describe('findUserByRestoreId', function () {
  var restoreId;

  beforeAll(function () {
    restoreId = 1;
  });

  it('should return a promise', function () {
    var restore = restoreAdapter.findUserByRestoreId(restoreId);
    expect(typeof restore.then === 'function').toBeTruthy();
  });
  it('should have called findAll once', function () {
    spyOn(UserModel, 'findAll');
    restoreAdapter.findUserByRestoreId(restoreId);
    expect(UserModel.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('restoreIsStart', function () {
  var restore;
  var restoreId;

  beforeEach(function () {
    restoreId = 1;
    restore = restoreAdapter.restoreIsStart(restoreId);
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
    restoreAdapter.restoreIsStart(restoreId).then(function (asyncRestore) {
      expect(asyncRestore.isStart).toBe(true);
    });
  });

  it('should have called findById once', function () {
    spyOn(RestoreModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(RestoreModel);
    }));

    restoreAdapter.restoreIsStart(restoreId);
    expect(RestoreModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('restoreIsFinish', function () {
  var restore;
  var restoreId;

  beforeEach(function () {
    restoreId = 1;
    restore = restoreAdapter.restoreIsFinish(restoreId);
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
    restoreAdapter.restoreIsFinish(restoreId).then(function (asyncRestore) {
      expect(asyncRestore.isFinish).toBe(true);
    });
  });

  it('should have called findById once', function () {
    spyOn(RestoreModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(RestoreModel);
    }));

    restoreAdapter.restoreIsFinish(restoreId);
    expect(RestoreModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('restoreIsSuccess', function () {
  var restore;
  var restoreId;

  beforeEach(function () {
    restoreId = 1;
    restore = restoreAdapter.restoreIsSuccess(restoreId);
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
    restoreAdapter.restoreIsSuccess(restoreId).then(function (asyncRestore) {
      expect(asyncRestore.isSuccess).toBe(true);
    });
  });

  it('should have called findById once', function () {
    spyOn(RestoreModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(RestoreModel);
    }));

    restoreAdapter.restoreIsSuccess(restoreId);
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
    restoreAdapter.getRestoreByUser(1);
    expect(RestoreModel.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('getRestoresByDay', function () {
  it('should return a promise', function () {
    var restore = restoreAdapter.getRestoresByDay();
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should have called findAndCountAll once', function () {
    spyOn(RestoreModel, 'findAndCountAll');
    restoreAdapter.getRestoresByDay();
    expect(RestoreModel.findAndCountAll).toHaveBeenCalledTimes(1);
  });
});
