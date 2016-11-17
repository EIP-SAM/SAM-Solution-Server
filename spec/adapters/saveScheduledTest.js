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

describe('historySucceededSavesByUser', function () {
  var username;

  beforeAll(function () {
    username = 'admin';
  });

  it('should return a promise', function () {
    var historySavesByUser = saveScheduledAdapter.historySucceededSavesByUser(username);
    expect(typeof historySavesByUser.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(SaveModel, 'findAll');
    saveScheduledAdapter.historySucceededSavesByUser(username);
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

describe('findUserBySaveScheduledId', function () {
  var saveScheduledId;

  beforeAll(function () {
    saveScheduledId = 1;
  });

  it('should return a promise', function () {
    var saveScheduled = saveScheduledAdapter.findUserBySaveScheduledId(saveScheduledId);
    expect(typeof saveScheduled.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(UserModel, 'findAll');
    saveScheduledAdapter.findUserBySaveScheduledId(saveScheduledId);
    expect(UserModel.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('findSaveScheduledById', function () {
  var saveScheduledId;

  beforeAll(function () {
    saveScheduledId = 1;
  });

  it('should return a promise', function () {
    var saveScheduled = saveScheduledAdapter.findSaveScheduledById(saveScheduledId);
    expect(typeof saveScheduled.then === 'function').toBeTruthy();
  });

  it('should have called findById once', function () {
    spyOn(SaveScheduledModel, 'findById');
    saveScheduledAdapter.findSaveScheduledById(saveScheduledId);
    expect(SaveScheduledModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('saveIsStart', function () {
  var saveId;
  var saveScheduled;

  beforeAll(function () {
    saveId = 1;
  });

  beforeEach(function () {
    saveScheduled = saveScheduledAdapter.saveIsStart(saveId);
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

  it('should have called findById once', function () {
    spyOn(SaveModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(SaveModel);
    }));
    saveScheduledAdapter.saveIsStart(saveId);
    expect(SaveModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('saveIsFinish', function () {
  var saveId;
  var saveScheduled;

  beforeAll(function () {
    saveId = 1;
  });

  beforeEach(function () {
    saveScheduled = saveScheduledAdapter.saveIsFinish(saveId);
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

  it('should have called findById once', function () {
    spyOn(SaveModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(SaveModel);
    }));
    saveScheduledAdapter.saveIsFinish(saveId);
    expect(SaveModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('saveIsSuccess', function () {
  var saveId;
  var saveScheduled;

  beforeAll(function () {
    saveId = 1;
  });

  beforeEach(function () {
    saveScheduled = saveScheduledAdapter.saveIsSuccess(saveId);
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

  it('should have called findById once', function () {
    spyOn(SaveModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(SaveModel);
    }));
    saveScheduledAdapter.saveIsSuccess(saveId);
    expect(SaveModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('branchSave', function () {
  var saveId;
  var branch;
  var saveScheduled;

  beforeAll(function () {
    saveId = 1;
    branch = 'spec';
  });

  beforeEach(function () {
    saveScheduled = saveScheduledAdapter.branchSave(saveId, branch);
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

  it('should have called findById once', function () {
    spyOn(SaveModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(SaveModel);
    }));
    saveScheduledAdapter.branchSave(saveId, branch);
    expect(SaveModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('findSaveById', function () {
  it('should return a promise', function () {
    var save = saveScheduledAdapter.findSaveById();
    expect(typeof save.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(SaveModel, 'findById');
    saveScheduledAdapter.findSaveById();
    expect(SaveModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('getAllSaveBySaveSchedule', function () {
  it('should return a promise', function () {
    var saveScheduled = saveScheduledAdapter.getAllSaveBySaveSchedule();
    expect(typeof saveScheduled.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(SaveModel, 'findAll');
    saveScheduledAdapter.getAllSaveBySaveSchedule();
    expect(SaveModel.findAll).toHaveBeenCalledTimes(1);
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

describe('getSavesByDay', function () {
  it('should return a promise', function () {
    var nbSave = saveScheduledAdapter.getSavesByDay();
    expect(typeof nbSave.then === 'function').toBeTruthy();
  });

  it('should have called findAndCountAll once', function () {
    spyOn(SaveModel, 'findAndCountAll');
    saveScheduledAdapter.getSavesByDay();
    expect(SaveModel.findAndCountAll).toHaveBeenCalledTimes(1);
  });
});
