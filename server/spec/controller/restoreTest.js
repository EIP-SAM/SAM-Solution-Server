//
// Unit test for restore controller
//
var restoreController = require('../../controllers/restore');
var restoreManager = require('../../managers/restore');

describe('createRestore', function () {
  var restore;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { userId: 1, saveId: 1 } };
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

describe('startRestore', function () {
  var restore;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { restoreId: 1 } };
    res = {};
  });

  beforeEach(function () {
    restore = restoreController.startRestore(req, res);
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

  it('should have called startRestore once', function () {
    spyOn(restoreManager, 'startRestore');
    restoreController.startRestore(req, res);
    expect(restoreManager.startRestore).toHaveBeenCalledTimes(1);
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
    restore = restoreController.restoreFinish(req, res);
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

  it('should have called restoreFinish once', function () {
    spyOn(restoreManager, 'restoreFinish');
    restoreController.restoreFinish(req, res);
    expect(restoreManager.restoreFinish).toHaveBeenCalledTimes(1);
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
    restore = restoreController.restoreSuccess(req, res);
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

  it('should have called restoreSuccess once', function () {
    spyOn(restoreManager, 'restoreSuccess');
    restoreController.restoreSuccess(req, res);
    expect(restoreManager.restoreSuccess).toHaveBeenCalledTimes(1);
  });
});

describe('getHistoryRestore', function () {
  var restore;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { restoreId: 1 } };
    res = {};
  });

  it('should return a promise', function () {
    var restore = restoreController.getHistoryRestore(req, res);
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should have called getHistoryRestore once', function () {
    spyOn(restoreManager, 'getHistoryRestore');
    restoreController.getHistoryRestore(req, res);
    expect(restoreManager.getHistoryRestore).toHaveBeenCalledTimes(1);
  });
});
