//
// Unit test for restore manager
//
var restoreManager = require('../../managers/restore');
var restoreAdapter = require('../../adapters/restore');

describe('createRestore', function () {
  var restore;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { userId: 1, saveId: 1 } };
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

  it('should have called createRestore once', function () {
    spyOn(restoreAdapter, 'createRestore');
    restoreManager.createRestore(req, res);
    expect(restoreAdapter.createRestore).toHaveBeenCalledTimes(1);
  });
});

describe('startRestore', function () {
  var restore;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { restoreId: 1 } };
    res = {};
  });

  beforeEach(function () {
    restore = restoreManager.startRestore(req, res);
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

  it('should have called restoreIsStart once', function () {
    spyOn(restoreAdapter, 'restoreIsStart');
    restoreManager.startRestore(req, res);
    expect(restoreAdapter.restoreIsStart).toHaveBeenCalledTimes(1);
  });
});

describe('restoreFinish', function () {
  var restore;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { restoreId: 1 } };
    res = {};
  });

  beforeEach(function () {
    restore = restoreManager.restoreFinish(req, res);
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

  it('should have called restoreIsFinish once', function () {
    spyOn(restoreAdapter, 'restoreIsFinish');
    restoreManager.restoreFinish(req, res);
    expect(restoreAdapter.restoreIsFinish).toHaveBeenCalledTimes(1);
  });
});

describe('restoreSuccess', function () {
  var restore;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { restoreId: 1 } };
    res = {};
  });

  beforeEach(function () {
    restore = restoreManager.restoreSuccess(req, res);
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

  it('should have called restoreIsSuccess once', function () {
    spyOn(restoreAdapter, 'restoreIsSuccess');
    restoreManager.restoreSuccess(req, res);
    expect(restoreAdapter.restoreIsSuccess).toHaveBeenCalledTimes(1);
  });
});

describe('getHistoryRestore', function () {
  var restore;
  var req;
  var res;

  beforeAll(function () {
    req = {};
    res = {};
  });

  it('should return a promise', function () {
    restore = restoreManager.getHistoryRestore(req, res);
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should have called getAllRestore once', function () {
    spyOn(restoreAdapter, 'getAllRestore');
    restore = restoreManager.getHistoryRestore(req, res);
    expect(restoreAdapter.getAllRestore).toHaveBeenCalledTimes(1);
  });

  xit('should have called getRestoreByUser once', function () {
    spyOn(restoreAdapter, 'getRestoreByUser');
    restore = restoreManager.getHistoryRestore(req, res);
    expect(restoreAdapter.getRestoreByUser).toHaveBeenCalledTimes(1);
  });
});
