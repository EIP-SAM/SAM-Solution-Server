//
// Unit test for restore manager
//
var restoreManager = require('../../managers/restore');
var restoreAdapter = require('../../adapters/restore');
var usersAdapter = require('../../adapters/users');
var UserModel = require('../../models/users');

describe('lastUsersRestores', function () {
  var req;
  var res;

  beforeAll(function () {
    req = {};
    res = {};
  });

  it('should return a promise', function () {
    var restore = restoreManager.lastUsersRestores(req, res);
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should have called lastUsersRestores once', function () {
    spyOn(restoreAdapter, 'lastUsersRestores');
    restoreManager.lastUsersRestores();
    expect(restoreAdapter.lastUsersRestores).toHaveBeenCalledTimes(1);
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
    var restore = restoreManager.historyRestoreByUser(req, res);
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should have called historyRestoreByUser once', function () {
    spyOn(restoreAdapter, 'historyRestoreByUser');
    restoreManager.historyRestoreByUser(req, res);
    expect(restoreAdapter.historyRestoreByUser).toHaveBeenCalledTimes(1);
  });
});

describe('createRestore', function () {
  var restore;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { userId: 1, files: "test.txt" } };
    res = {};
  });

  beforeEach(function () {
    restore = restoreManager.createRestore(req, res);
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

  it('should have called findById once', function () {
    spyOn(usersAdapter, 'findById').and.returnValue(
          new Promise(function (resolve, reject) {
      resolve(UserModel);
    }));

    restoreManager.createRestore(req, res);
    expect(usersAdapter.findById).toHaveBeenCalledTimes(1);
  });
});
