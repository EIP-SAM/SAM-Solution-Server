//
// Unit test for saveScheduled adapter
//
var saveScheduledAdapter = require('../../adapters/saveScheduled');
var SaveScheduledModel = require('../../models/saveScheduled');

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
