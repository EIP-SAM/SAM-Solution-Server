//
// Unit test for restore controller
//
var saveController = require('../../controllers/save');
var saveManager = require('../../managers/save');

describe('lastUsersSaves', function () {
  var req;
  var res;

  beforeAll(function () {
    req = {};
    res = {};
  });

  it('should return a promise', function () {
    var saves = saveController.lastUsersSaves(req, res);
    expect(typeof saves.then === 'function').toBeTruthy();
  });

  it('should have called lastUsersSaves once', function () {
    spyOn(saveManager, 'lastUsersSaves');
    saveController.lastUsersSaves(req, res);
    expect(saveManager.lastUsersSaves).toHaveBeenCalledTimes(1);
  });
});

describe('historySavesByUser', function () {
  var req;
  var res;

  beforeAll(function () {
    req = { query: function() {
      return 'admin';
    }};
    res = {};
  });

  it('should return a promise', function () {
    var saves = saveController.historySavesByUser(req, res);
    expect(typeof saves.then === 'function').toBeTruthy();
  });

  it('should have called historySavesByUser once', function () {
    spyOn(saveManager, 'historySavesByUser');
    saveController.historySavesByUser(req, res);
    expect(saveManager.historySavesByUser).toHaveBeenCalledTimes(1);
  });
});

describe('createSave', function () {
  var req;
  var res;

  beforeAll(function () {
    req = { body: { usersId: [1, 2], repeatFrequenceSave: 'No Repeat', cron: '*/1 * * * *',
            files: 'test.txt', dateProgSave: '08/05/2016', timeProgSave: '20:13:00', }, };
    res = {};
  });

  it('should have called createSave once', function () {
    spyOn(saveManager, 'createSave');
    saveController.createSave(req, res);
    expect(saveManager.createSave).toHaveBeenCalledTimes(1);
  });
});

describe('cancelSave', function () {
  var req;
  var res;

  beforeAll(function () {
    req = {};
    res = {};
  });

  it('should have called cancelSave once', function () {
    spyOn(saveManager, 'cancelSave');
    saveController.cancelSave(req, res);
    expect(saveManager.cancelSave).toHaveBeenCalledTimes(1);
  });
});

xdescribe('startSave', function () {
  var save;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { saveId: 1 } };
    res = {};
  });

  beforeEach(function () {
    save = saveController.startSave(req, res);
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

  it('should have called startSave once', function () {
    spyOn(saveManager, 'startSave');
    saveController.startSave(req, res);
    expect(saveManager.startSave).toHaveBeenCalledTimes(1);
  });
});

xdescribe('saveFinish', function () {
  var save;
  var req;
  var res;

  beforeAll(function () {
    req = { body: { saveId: 1, saveScheduledId: 1 } };
    res = {};
  });

  beforeEach(function () {
    save = saveController.saveFinish(req, res);
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

  it('should have called saveFinish once', function () {
    spyOn(saveManager, 'saveFinish');
    saveController.saveFinish(req, res);
    expect(saveManager.saveFinish).toHaveBeenCalledTimes(1);
  });
});

xdescribe('saveSuccess', function () {
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

  it('should have called saveSuccess once', function () {
    spyOn(saveManager, 'saveSuccess');
    saveController.saveSuccess(req, res);
    expect(saveManager.saveSuccess).toHaveBeenCalledTimes(1);
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

  xit('should have called getHistorySave once', function () {
    spyOn(saveManager, 'getHistorySave');
    saveController.getHistorySave(req, res);
    expect(saveManager.getHistorySave).toHaveBeenCalledTimes(1);
  });
});
