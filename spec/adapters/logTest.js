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
