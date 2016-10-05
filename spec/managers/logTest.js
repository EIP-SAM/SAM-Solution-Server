//
// Unit test for log manager
//
var logManager = require('../../managers/log');
var logAdapter = require('../../adapters/log');

describe('getLogsWithMultipleCriteria', function () {
  it('should return a promise', function () {
    var logs = logAdapter.getLogsWithMultipleCriteria();
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called getLogsWithMultipleCriteria once', function () {
    spyOn(logAdapter, 'getLogsWithMultipleCriteria');
    logManager.getLogsWithMultipleCriteria().then(function (logs) {
      expect(logAdapter.getLogsWithMultipleCriteria).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getNumberOfLogsGroupByModuleName', function () {
  it('should return a promise', function () {
    var logs = logAdapter.getNumberOfLogsGroupByModuleName();
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called getNumberOfLogsGroupByModuleName once', function () {
    spyOn(logAdapter, 'getNumberOfLogsGroupByModuleName');
    logManager.getNumberOfLogsGroupByModuleName().then(function (logs) {
      expect(logAdapter.getNumberOfLogsGroupByModuleName).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getNumberOfLogsGroupByLevel', function () {
  it('should return a promise', function () {
    var logs = logAdapter.getNumberOfLogsGroupByLevel();
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called getNumberOfLogsGroupByLevel once', function () {
    spyOn(logAdapter, 'getNumberOfLogsGroupByLevel');
    logManager.getNumberOfLogsGroupByLevel().then(function (logs) {
      expect(logAdapter.getNumberOfLogsGroupByLevel).toHaveBeenCalledTimes(1);
    });
  });
});
