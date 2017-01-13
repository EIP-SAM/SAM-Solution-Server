//
// Unit test for save manager
//
var saveManager = require('../../managers/save');
var cronManager = require('../../managers/cronSave');
var saveScheduledAdapter = require('../../adapters/saveScheduled');
var SaveScheduledModel = require('../../models/saveScheduled');
var UserModel = require('../../models/users');
const daemonSave = require('../../websocket/daemon/save');

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
    }));
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

describe('execSave', function () {
  var req;
  var res;

  beforeAll(function () {
    req = { body: { usersId: [1, 2], frequency: 'No Repeat', cron: '*/1 * * * *',
            files: 'test.txt', date: '08/05/2016', time: '20:13:00', }, };
    res = {};
  });

  it('should have called exec once', function () {
    spyOn(daemonSave, 'exec');
    saveManager.execSave(req, res);
    expect(daemonSave.exec).toHaveBeenCalledTimes(1);
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
