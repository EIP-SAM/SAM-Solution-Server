//
// Unit test for saveScheduled adapter
//
var saveAdapter = require('../../adapters/save');
var SaveModel = require('../../models/save');

describe('saveIsStart', function () {
  var save;

  beforeEach(function () {
    save = saveAdapter.saveIsStart(1);
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

  it('should return a SaveModel with isStart boolean at true', function () {
    saveAdapter.saveIsStart(1).then(function (asyncSave) {
      expect(asyncSave.isStart).toBe(true);
    });
  });

  it('should have called findById once', function () {
    spyOn(SaveModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(SaveModel);
    }));

    saveAdapter.saveIsStart(1);
    expect(SaveModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('saveIsFinish', function () {
  var save;

  beforeEach(function () {
    save = saveAdapter.saveIsFinish(1);
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

  it('should return a SaveModel with isFinish boolean at true', function () {
    saveAdapter.saveIsFinish(1).then(function (asyncSave) {
      expect(asyncSave.isFinish).toBe(true);
    });
  });

  it('should have called findById once', function () {
    spyOn(SaveModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(SaveModel);
    }));

    saveAdapter.saveIsFinish(1);
    expect(SaveModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('saveIsSuccess', function () {
  var save;

  beforeEach(function () {
    save = saveAdapter.saveIsSuccess(1);
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

  it('should return a SaveModel with isSuccess boolean at true', function () {
    saveAdapter.saveIsSuccess(1).then(function (asyncSave) {
      expect(asyncSave.isSuccess).toBe(true);
    });
  });

  it('should have called findById once', function () {
    spyOn(SaveModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(SaveModel);
    }));

    saveAdapter.saveIsSuccess(1);
    expect(SaveModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('hashSave', function () {
  var save;

  beforeEach(function () {
    save = saveAdapter.hashSave(1, '#00000');
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

  it('should return a SaveModel with isSuccess boolean at true', function () {
    saveAdapter.hashSave(1, '#00000').then(function (asyncSave) {
      expect(asyncSave.hash).toBe('#00000');
    });
  });

  it('should have called findById once', function () {
    spyOn(SaveModel, 'findById').and.returnValue(new Promise(function (resolve, reject) {
      resolve(SaveModel);
    }));

    saveAdapter.hashSave(1, '#00000');
    expect(SaveModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('getAllSave', function () {
  it('should return a promise', function () {
    var save = saveAdapter.getAllSave();
    expect(typeof save.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(SaveModel, 'findAll');
    saveAdapter.getAllSave();
    expect(SaveModel.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('getAllSaveBySaveSchedule', function () {
  it('should return a promise', function () {
    var restore = saveAdapter.getAllSaveBySaveSchedule(1);
    expect(typeof restore.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(SaveModel, 'findAll');
    saveAdapter.getAllSaveBySaveSchedule();
    expect(SaveModel.findAll).toHaveBeenCalledTimes(1);
  });
});
