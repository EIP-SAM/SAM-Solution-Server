//
// Unit test for log manager
//
var logManager = require('../../managers/log');
var logAdapter = require('../../adapters/log');

describe('getLogs', function () {
  it('should have called getLogs once', function () {
    spyOn(logAdapter, 'getLogs');
    logManager.getLogs().then(function (logs) {
      expect(logAdapter.getLogs).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getLimitedLogs', function () {
  it('should have called getLimitedLogs once', function () {
    spyOn(logAdapter, 'getLimitedLogs');
    logManager.getLimitedLogs(1).then(function (logs) {
      expect(logAdapter.getLimitedLogs).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getLogsByLevel', function () {
  it('should have called getLogsByLevel once', function () {
    spyOn(logAdapter, 'getLogsByLevel');
    logManager.getLogsByLevel(1).then(function (logs) {
      expect(logAdapter.getLogsByLevel).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getLogsBelowLevel', function () {
  it('should have called getLogsBelowLevel once', function () {
    spyOn(logAdapter, 'getLogsBelowLevel');
    logManager.getLogsBelowLevel(1).then(function (logs) {
      expect(logAdapter.getLogsBelowLevel).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getLogsAboveLevel', function () {
  it('should have called getLogsAboveLevel once', function () {
    spyOn(logAdapter, 'getLogsAboveLevel');
    logManager.getLogsAboveLevel(1).then(function (logs) {
      expect(logAdapter.getLogsAboveLevel).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getLogsByModuleName', function () {

  var moduleName = 'log';

  it('should have called getLogsByModuleName once', function () {
    spyOn(logAdapter, 'getLogsByModuleName');
    logManager.getLogsByModuleName(moduleName).then(function (logs) {
      expect(logAdapter.getLogsByModuleName).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getLimitedLogsByModuleName', function () {

  var moduleName = 'log';
  var limit = 1;

  it('should have called getLimitedLogsByModuleName once', function () {
    spyOn(logAdapter, 'getLimitedLogsByModuleName');
    logManager.getLimitedLogsByModuleName(moduleName, limit).then(function (logs) {
      expect(logAdapter.getLimitedLogsByModuleName).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getLogsById', function () {
  it('should have called getLogsById once', function () {
    spyOn(logAdapter, 'getLogsById');
    logManager.getLogsById(1).then(function (logs) {
      expect(logAdapter.getLogsById).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getLimitedLogsById', function () {
  it('should have called getLimitedLogsById once', function () {
    spyOn(logAdapter, 'getLimitedLogsById');
    logManager.getLimitedLogsById(1, 1).then(function (logs) {
      expect(logAdapter.getLimitedLogsById).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getLogsByLevelById', function () {
  it('should have called getLogsByLevelById once', function () {
    spyOn(logAdapter, 'getLogsByLevelById');
    logManager.getLogsByLevelById(1, 1).then(function (logs) {
      expect(logAdapter.getLogsByLevelById).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getLogsBelowLevelById', function () {
  it('should have called getLogsBelowLevelById once', function () {
    spyOn(logAdapter, 'getLogsBelowLevelById');
    logManager.getLogsBelowLevelById(1, 1).then(function (logs) {
      expect(logAdapter.getLogsBelowLevelById).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getLogsAboveLevelById', function () {
  it('should have called getLogsAboveLevelById once', function () {
    spyOn(logAdapter, 'getLogsAboveLevelById');
    logManager.getLogsAboveLevelById(1, 1).then(function (logs) {
      expect(logAdapter.getLogsAboveLevelById).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getLogsByModuleNameById', function () {

  var userId = 1;
  var moduleName = 'log';

  it('should have called getLogsByModuleNameById once', function () {
    spyOn(logAdapter, 'getLogsByModuleNameById');
    logManager.getLogsByModuleNameById(userId, moduleName).then(function (logs) {
      expect(logAdapter.getLogsByModuleNameById).toHaveBeenCalledTimes(1);
    });
  });
});

describe('getLimitedLogsByModuleNameById', function () {

  var userId = 1;
  var moduleName = 'log';
  var limit = 1;

  it('should have called getLimitedLogsByModuleNameById once', function () {
    spyOn(logAdapter, 'getLimitedLogsByModuleNameById');
    logManager.getLimitedLogsByModuleNameById(userId, moduleName, limit).then(function (logs) {
      expect(logAdapter.getLimitedLogsByModuleNameById).toHaveBeenCalledTimes(1);
    });
  });
});
