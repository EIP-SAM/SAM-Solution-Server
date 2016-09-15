//
// Unit test for restore controller
//
var restoreController = require('../../controllers/restore');
var restoreManager = require('../../managers/restore');

describe('lastUsersRestores', function () {
  var req;
  var res;

  beforeAll(function () {
    req = {};
    res = {};
  });

  it('should return a promise', function () {
    var restore = restoreController.lastUsersRestores(req, res);
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should have called lastUsersRestores once', function () {
    spyOn(restoreManager, 'lastUsersRestores');
    restoreController.lastUsersRestores();
    expect(restoreManager.lastUsersRestores).toHaveBeenCalledTimes(1);
  });
});

describe('historyRestoreByUser', function () {
  var req;
  var res;

  beforeAll(function () {
    req = { query: function() {
      return 'admin';
    }};
    res = {};
  });

  it('should return a promise', function () {
    var restore = restoreController.historyRestoreByUser(req, res);
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should have called historyRestoreByUser once', function () {
    spyOn(restoreManager, 'historyRestoreByUser');
    restoreController.historyRestoreByUser(req, res);
    expect(restoreManager.historyRestoreByUser).toHaveBeenCalledTimes(1);
  });
});

describe('createRestore', function () {
  var restore;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { userId: 1, files: 'test.txt'} };
    res = {};
  });

  beforeEach(function () {
    restore = restoreController.createRestore(req, res);
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

  it('should have called createRestore once', function () {
    spyOn(restoreManager, 'createRestore');
    restoreController.createRestore(req, res);
    expect(restoreManager.createRestore).toHaveBeenCalledTimes(1);
  });
});
