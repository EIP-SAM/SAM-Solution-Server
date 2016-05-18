//
// Unit test for save manager
//
var saveManager = require('../../managers/save');
var cronManager = require('../../managers/cronSave');
var saveScheduledAdapter = require('../../adapters/saveScheduled');
var saveAdapter = require('../../adapters/save');
var SaveScheduledModel = require('../../models/saveScheduled');

//var SaveModel = require('../../models/save');

describe('createSave', function () {
  var save;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { userId: 1, repeatFrequenceSave: 'no', cron: '*/1 * * * *',
            files: 'test.txt', dateProgSave: '08-05-2016', timeProgSave: '20:13:00', }, };
    res = {};
  });

  beforeEach(function () {
    save = saveManager.createSave(req, res);
  });

  afterEach(function () {
    restore = null;
  });

  it('should not return null or undefined object', function () {
    expect(save).not.toBeNull();
    expect(save).toBeDefined();
  });

  it('should return a promise', function () {
    expect(typeof save.then === 'function').toBeTruthy();
  });

  it('should have called createSaveScheduled once', function () {
    spyOn(saveScheduledAdapter, 'createSaveScheduled').and.returnValue(
          new Promise(function (resolve, reject) {
      resolve(SaveScheduledModel);
    }));

    saveManager.createSave(req, res);
    expect(saveScheduledAdapter.createSaveScheduled).toHaveBeenCalledTimes(1);
  });
});

describe('startSave', function () {
  var save;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { saveId: 1 } };
    res = {};
  });

  beforeEach(function () {
    save = saveManager.startSave(req, res);
  });

  afterEach(function () {
    save = null;
  });

  it('should not return null or undefined object', function () {
    expect(save).not.toBeNull();
    expect(save).toBeDefined();
  });

  it('should return a promise', function () {
    expect(typeof save.then === 'function').toBeTruthy();
  });

  it('should have called saveIsStart once', function () {
    spyOn(saveAdapter, 'saveIsStart');
    saveManager.startSave(req, res);
    expect(saveAdapter.saveIsStart).toHaveBeenCalledTimes(1);
  });
});

describe('saveFinish', function () {
  var save;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { saveId: 1, saveScheduledId: 1 } };
    res = {};
  });

  beforeEach(function () {
    save = saveManager.saveFinish(req, res);
  });

  afterEach(function () {
    save = null;
  });

  it('should not return null or undefined object', function () {
    expect(save).not.toBeNull();
    expect(save).toBeDefined();
  });

  it('should return a promise', function () {
    expect(typeof save.then === 'function').toBeTruthy();
  });

  it('should have called findSaveScheduledById once', function () {
    spyOn(saveScheduledAdapter, 'findSaveScheduledById').and.returnValue(
          new Promise(function (resolve, reject) {
      resolve(SaveScheduledModel);
    }));

    saveManager.saveFinish(req, res);
    expect(saveScheduledAdapter.findSaveScheduledById).toHaveBeenCalledTimes(1);
  });

  it('should have called saveIsFinish once', function () {
    spyOn(saveAdapter, 'saveIsFinish');

    saveManager.saveFinish(req, res);
    expect(saveAdapter.saveIsFinish).toHaveBeenCalledTimes(1);
  });
});

describe('saveSuccess', function () {
  var save;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { saveId: 1 } };
    res = {};
  });

  beforeEach(function () {
    save = saveManager.saveSuccess(req, res);
  });

  afterEach(function () {
    save = null;
  });

  it('should not return null or undefined object', function () {
    expect(save).not.toBeNull();
    expect(save).toBeDefined();
  });

  it('should return a promise', function () {
    expect(typeof save.then === 'function').toBeTruthy();
  });

  it('should have called saveIsSuccess once', function () {
    spyOn(saveAdapter, 'saveIsSuccess');
    saveManager.saveSuccess(req, res);
    expect(saveAdapter.saveIsSuccess).toHaveBeenCalledTimes(1);
  });

  it('should have called hashSave once', function () {
    spyOn(saveAdapter, 'hashSave');
    saveManager.saveSuccess(req, res);
    expect(saveAdapter.hashSave).toHaveBeenCalledTimes(1);
  });
});

describe('getHistorySave', function () {
  var save;
  var req;
  var res;

  beforeAll(function () {
    req = {};
    res = {};
  });

  beforeEach(function () {
    save = saveManager.getHistorySave(req, res);
  });

  afterEach(function () {
    save = null;
  });

  it('should return a promise', function () {
    expect(typeof save.then === 'function').toBeTruthy();
  });

  it('should have called getAllSaveScheduled once', function () {
    spyOn(saveScheduledAdapter, 'getAllSaveScheduled').and.returnValue(
          new Promise(function (resolve, reject) {
      resolve(SaveScheduledModel);
    }));

    saveManager.getHistorySave(req, res);
    expect(saveScheduledAdapter.getAllSaveScheduled).toHaveBeenCalledTimes(1);
  });

  xit('should have called getAllSaveScheduledByUser once', function () {
    spyOn(saveScheduledAdapter, 'getAllSaveScheduledByUser');
    saveManager.getHistorySave(req, res);
    expect(saveScheduledAdapter.getAllSaveScheduledByUser).toHaveBeenCalledTimes(1);
  });
});
