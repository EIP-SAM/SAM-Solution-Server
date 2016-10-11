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

describe('historySucceededSavesByUser', function () {
  var req;
  var res;

  beforeAll(function () {
    req = { query: function() {
      return 'admin';
    }};
    res = {};
  });

  it('should return a promise', function () {
    var historySavesByUser = saveManager.historySucceededSavesByUser(req, res);
    expect(typeof historySavesByUser.then === 'function').toBeTruthy();
  });

  it('should have called historySavesByUser once', function () {
    spyOn(saveScheduledAdapter, 'historySucceededSavesByUser');
    saveManager.historySucceededSavesByUser(req, res);
    expect(saveScheduledAdapter.historySucceededSavesByUser).toHaveBeenCalledTimes(1);
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

describe('startSave', function () {
  var saveId;
  var saveScheduled;

  beforeAll(function () {
    saveId: 1;
  });

  beforeEach(function () {
    saveScheduled = saveManager.startSave(saveId);
  });

  afterEach(function () {
    saveScheduled = null;
  });

  it('should not return null or undefined object', function () {
    expect(saveScheduled).not.toBeNull();
    expect(saveScheduled).toBeDefined();
  });

  it('should return a promise', function () {
    expect(typeof saveScheduled.then === 'function').toBeTruthy();
  });

  it('should have called saveIsStart once', function () {
    spyOn(saveScheduledAdapter, 'saveIsStart');
    saveManager.startSave(saveId);
    expect(saveScheduledAdapter.saveIsStart).toHaveBeenCalledTimes(1);
  });
});

describe('saveFinish', function () {
  var saveScheduled;
  var saveScheduledId;
  var saveId;
  var username;
  var files;

  beforeAll(function () {
    saveScheduledId = 1;
    saveId = 1;
    username = 'admin';
    files = 'test.txt';
  });

  beforeEach(function () {
    saveScheduled = saveManager.saveFinish(saveScheduledId, saveId, username, files);
  });

  afterEach(function () {
    saveScheduled = null;
  });

  it('should not return null or undefined object', function () {
    expect(saveScheduled).not.toBeNull();
    expect(saveScheduled).toBeDefined();
  });

  it('should return a promise', function () {
    expect(typeof saveScheduled.then === 'function').toBeTruthy();
  });

  it('should have called findSaveScheduledById once', function () {
    spyOn(saveScheduledAdapter, 'findSaveScheduledById').and.returnValue(
          new Promise(function (resolve, reject) {
      resolve(SaveScheduledModel);
    }));

    saveManager.saveFinish(saveScheduledId, saveId, username, files);
    expect(saveScheduledAdapter.findSaveScheduledById).toHaveBeenCalledTimes(1);
  });

  it('should have called saveIsFinish once', function () {
    spyOn(saveScheduledAdapter, 'saveIsFinish');
    saveManager.saveFinish(saveScheduledId, saveId, username, files);
    expect(saveScheduledAdapter.saveIsFinish).toHaveBeenCalledTimes(1);
  });
});

describe('saveSuccess', function () {
  var saveScheduled;
  var saveId;
  var branch;

  beforeAll(function () {
    saveId = 1;
    branch = 'test';
  });

  beforeEach(function () {
    saveScheduled = saveManager.saveSuccess(saveId, branch);
  });

  afterEach(function () {
    saveScheduled = null;
  });

  it('should have called saveIsSuccess once', function () {
    spyOn(saveScheduledAdapter, 'saveIsSuccess');
    saveManager.saveSuccess(saveId, branch);
    expect(saveScheduledAdapter.saveIsSuccess).toHaveBeenCalledTimes(1);
  });

  it('should have called branchSave once', function () {
    spyOn(saveScheduledAdapter, 'branchSave');
    saveManager.saveSuccess(saveId, branch);
    expect(saveScheduledAdapter.branchSave).toHaveBeenCalledTimes(1);
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
