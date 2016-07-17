//
// Unit test for saveScheduled adapter
//
var saveScheduledAdapter = require('../../adapters/saveScheduled');
var SaveScheduledModel = require('../../models/saveScheduled');
var UserModel = require('../../models/users');
var SaveModel = require('../../models/save');

describe('lastUsersSaves', function () {
  it('should return a promise', function () {
    var lastUsersSaves = saveScheduledAdapter.lastUsersSaves();
    expect(typeof lastUsersSaves.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(UserModel, 'findAll');
    saveScheduledAdapter.lastUsersSaves();
    expect(UserModel.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('historySavesByUser', function () {
  var username;

  beforeAll(function () {
    username = 'admin';
  });

  it('should return a promise', function () {
    var historySavesByUser = saveScheduledAdapter.historySavesByUser(username);
    expect(typeof historySavesByUser.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(SaveModel, 'findAll');
    saveScheduledAdapter.historySavesByUser(username);
    expect(SaveModel.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('createSaveScheduled', function () {
  var saveScheduled;

  beforeEach(function () {
    saveScheduled = saveScheduledAdapter.createSaveScheduled(1, '*/1 * * * *', 'test.txt');
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

  it('should return a SaveScheduledModel object with right values', function () {
    saveScheduledAdapter.createSaveScheduled(1, '*/1 * * * *', 'test.txt')
                        .then(function (asyncSaveScheduled) {
      expect(asyncSaveScheduled.userId).toEqual(1);
      expect(asyncSaveScheduled.cron).toEqual('*/1 * * * *');
      expect(asyncSaveScheduled.files).toEqual('test.txt');
    });
  });

  it('should have called create once', function () {
    spyOn(SaveScheduledModel, 'create');
    saveScheduledAdapter.createSaveScheduled(1, '*/1 * * * *', 'test.txt');
    expect(SaveScheduledModel.create).toHaveBeenCalledTimes(1);
  });
});

describe('createSave', function () {
  var save;

  beforeEach(function () {
    save = saveScheduledAdapter.createSave(1, new Date());
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

  it('should return a SaveModel object with right values', function () {
    saveScheduledAdapter.createSave(1, new Date()).then(function (asyncSave) {
      expect(asyncSave.saveScheduledId).toEqual(1);
      expect(asyncSave.execDate).toEqual(new Date());
    });
  });

  it('should have called create once', function () {
    spyOn(SaveModel, 'create');
    saveScheduledAdapter.createSave(1, new Date());
    expect(SaveModel.create).toHaveBeenCalledTimes(1);
  });
});

describe('disableSaveScheduled', function () {
  var saveScheduled;

  beforeEach(function () {
    saveScheduled = saveScheduledAdapter.disableSaveScheduled(1);
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

  it('should return a SaveScheduledModel with isActive boolean at true', function () {
    saveScheduledAdapter.disableSaveScheduled(1).then(function (asyncSaveScheduled) {
      expect(asyncSaveScheduled.isActive).toBe(true);
    });
  });

  it('should have called findById once', function () {
    spyOn(SaveScheduledModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(SaveScheduledModel);
    }));

    saveScheduledAdapter.disableSaveScheduled(1);
    expect(SaveScheduledModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('cancelSave', function () {
  var save;

  beforeEach(function () {
    save = saveScheduledAdapter.cancelSave(1);
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

  it('should return a SaveModel with canceled boolean at true', function () {
    saveScheduledAdapter.cancelSave(1).then(function (asyncSave) {
      expect(asyncSave.canceled).toBe(true);
    });
  });

  it('should have called findById once', function () {
    spyOn(SaveModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(SaveModel);
    }));

    saveScheduledAdapter.cancelSave(1);
    expect(SaveModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('findSaveScheduledById', function () {
  it('should return a promise', function () {
    var saveScheduled = saveScheduledAdapter.findSaveScheduledById(1);
    expect(typeof saveScheduled.then === 'function').toBeTruthy();
  });

  it('should have called findById once', function () {
    spyOn(SaveScheduledModel, 'findById');
    saveScheduledAdapter.findSaveScheduledById(1);
    expect(SaveScheduledModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('getAllSaveScheduled', function () {
  it('should return a promise', function () {
    var saveScheduled = saveScheduledAdapter.getAllSaveScheduled();
    expect(typeof saveScheduled.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(SaveScheduledModel, 'findAll');
    saveScheduledAdapter.getAllSaveScheduled();
    expect(SaveScheduledModel.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('getAllSaveScheduledByUser', function () {
  it('should return a promise', function () {
    var saveScheduled = saveScheduledAdapter.getAllSaveScheduledByUser(1);
    expect(typeof saveScheduled.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(SaveScheduledModel, 'findAll');
    saveScheduledAdapter.getAllSaveScheduledByUser(1);
    expect(SaveScheduledModel.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('getAllSaveScheduleActive', function () {
  it('should return a promise', function () {
    var saveScheduled = saveScheduledAdapter.getAllSaveScheduleActive();
    expect(typeof saveScheduled.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(SaveScheduledModel, 'findAll');
    saveScheduledAdapter.getAllSaveScheduleActive();
    expect(SaveScheduledModel.findAll).toHaveBeenCalledTimes(1);
  });
});
