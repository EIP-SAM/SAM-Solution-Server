//
// Unit test for log adapter
//
var logAdapter = require('../../adapters/log');
var logModel = require('../../models/log');
var logger  = require('../../libs/bunyan');

describe('getLogsWithMultipleCriteria', function () {
  it('should return a promise', function () {
    var logs = logAdapter.getLogsWithMultipleCriteria({
      queryCriteria: {},
    });
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogsWithMultipleCriteria({
      queryCriteria: {},
    });
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called sort once', function () {
    var object = { sort: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'sort');
    logAdapter.getLogsWithMultipleCriteria({
      queryCriteria: {},
    });
    expect(object.sort).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {
    var objectSort = { sort: function () {
        return;
      }, };
    var objectExec = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(objectSort);
    spyOn(objectSort, 'sort').and.returnValue(objectExec);
    spyOn(objectExec, 'exec');
    logAdapter.getLogsWithMultipleCriteria({
      queryCriteria: {},
    });
    expect(objectSort.sort).toHaveBeenCalledTimes(1);
    expect(objectExec.exec).toHaveBeenCalledTimes(1);
  });
});

describe('getNumberOfLogsGroupByModuleName', function () {
  it('should return a promise', function () {
    var logs = logAdapter.getNumberOfLogsGroupByModuleName();
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called aggregate once', function () {
    spyOn(logModel, 'aggregate');
    logAdapter.getNumberOfLogsGroupByModuleName();
    expect(logModel.aggregate).toHaveBeenCalledTimes(1);
  });
});

describe('getNumberOfLogsGroupByLevel', function () {
  it('should return a promise', function () {
    var logs = logAdapter.getNumberOfLogsGroupByLevel();
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called aggregate once', function () {
    spyOn(logModel, 'aggregate');
    logAdapter.getNumberOfLogsGroupByLevel();
    expect(logModel.aggregate).toHaveBeenCalledTimes(1);
  });
});
