//
// Unit test for log adapter
//
var logAdapter = require('../../adapters/log');
var logModel = require('../../models/log');
var logger  = require('../../libs/bunyan');

describe('getLogsWithMultipleCriteria', function () {
  it('should return a promise', function () {
    var logs = logAdapter.getLogsWithMultipleCriteria();
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogsWithMultipleCriteria();
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {
    var object = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'exec');
    logAdapter.getLogsWithMultipleCriteria();
    expect(object.exec).toHaveBeenCalledTimes(1);
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
