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
    var historySavesByUser = saveController.historySucceededSavesByUser(req, res);
    expect(typeof historySavesByUser.then === 'function').toBeTruthy();
  });

  it('should have called historySavesByUser once', function () {
    spyOn(saveManager, 'historySucceededSavesByUser');
    saveController.historySucceededSavesByUser(req, res);
    expect(saveManager.historySucceededSavesByUser).toHaveBeenCalledTimes(1);
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
