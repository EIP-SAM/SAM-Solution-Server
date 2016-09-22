//
// Unit test for save manager
//
var saveManager = require('../../managers/save');
var cronManager = require('../../managers/cronSave');
var saveScheduledAdapter = require('../../adapters/saveScheduled');
var SaveScheduledModel = require('../../models/saveScheduled');
var UserModel = require('../../models/users');

describe('lastUsersSaves', function () {
  var req;
  var res;

  beforeAll(function () {
    req = {};
    res = {};
  });

  it('should return a promise', function () {
    var lastUsersSaves = saveManager.lastUsersSaves(req, res);
    expect(typeof lastUsersSaves.then === 'function').toBeTruthy();
  });

  it('should have called lastUsersSaves once', function () {
    spyOn(saveScheduledAdapter, 'lastUsersSaves').and.returnValue(
          new Promise(function (resolve, reject) {
      resolve(UserModel);
    }));;
    saveManager.lastUsersSaves(req, res);
    expect(saveScheduledAdapter.lastUsersSaves).toHaveBeenCalledTimes(1);
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
    var historySavesByUser = saveManager.historySavesByUser(req, res);
    expect(typeof historySavesByUser.then === 'function').toBeTruthy();
  });

  it('should have called historySavesByUser once', function () {
    spyOn(saveScheduledAdapter, 'historySavesByUser');
    saveManager.historySavesByUser(req, res);
    expect(saveScheduledAdapter.historySavesByUser).toHaveBeenCalledTimes(1);
  });

});

describe('createSave', function () {
  var req;
  var res;

  beforeAll(function () {
    req = { body: { usersId: [1, 2], frequency: 'No Repeat', cron: '*/1 * * * *',
            files: 'test.txt', date: '08/05/2016', time: '20:13:00', }, };
    res = {};
  });

  it('should have called parseDateFrequencyToCron once', function () {
    var reqCron = { body: { usersId: [1, 2], frequency: 'Daily', cron: '*/1 * * * *',
            files: 'test.txt', date: '08/05/2016', time: '20:13:00', }, };
    spyOn(cronManager, 'parseDateFrequencyToCron');
    saveManager.createSave(reqCron, res);
    expect(cronManager.parseDateFrequencyToCron).toHaveBeenCalledTimes(1);
  });

  it('should have called createSaveScheduled once', function () {
    spyOn(saveScheduledAdapter, 'createSaveScheduled').and.returnValue(
          new Promise(function (resolve, reject) {
      resolve(SaveScheduledModel);
    }));
    saveManager.createSave(req, res);
    expect(saveScheduledAdapter.createSaveScheduled).toHaveBeenCalledTimes(2);
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

xdescribe('saveFinish', function () {
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

describe('cancelSave', function () {
    var req;
    var res;

    beforeAll(function () {
      req = { body: { saveId: 1, saveScheduledId: 1 } };
      res = {};
    });

    it('should have called removeCron once', function () {
      spyOn(cronManager, 'removeCron');
      saveManager.cancelSave(req, res);
      expect(cronManager.removeCron).toHaveBeenCalledTimes(1);
    });
})

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
