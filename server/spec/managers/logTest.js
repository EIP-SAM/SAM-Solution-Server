//
// Unit test for log manager
//
var logManager = require('../../managers/log');
var logAdapter = require('../../adapters/log');

describe('launchLog', function () {
  var header;

  beforeAll(function () {
    header = { moduleName: 'restore', userID: 15 };
  });

  it('should not return null or undefined object', function () {
    var child = logManager.launchLog(header);
    expect(child).not.toBeNull();
    expect(child).toBeDefined();
  });

  it('should have called createChild once', function () {
    spyOn(logAdapter, 'createChild');
    logManager.launchLog(header);
    expect(logAdapter.createChild).toHaveBeenCalledTimes(1);
  });
});

describe('getLogs', function () {
  it('should have called getLogs once', function () {
    spyOn(logAdapter, 'getLogs');
    logManager.getLogs();
    expect(logAdapter.getLogs).toHaveBeenCalledTimes(1);
  });
});

describe('getLimitedLogs', function () {
  it('should have called getLimitedLogs once', function () {
    spyOn(logAdapter, 'getLimitedLogs');
    logManager.getLimitedLogs(1);
    expect(logAdapter.getLimitedLogs).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsByLevel', function () {
  it('should have called getLogsByLevel once', function () {
    spyOn(logAdapter, 'getLogsByLevel');
    logManager.getLogsByLevel(1);
    expect(logAdapter.getLogsByLevel).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsBelowLevel', function () {
  it('should have called getLogsBelowLevel once', function () {
    spyOn(logAdapter, 'getLogsBelowLevel');
    logManager.getLogsBelowLevel(1);
    expect(logAdapter.getLogsBelowLevel).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsAboveLevel', function () {
  it('should have called getLogsAboveLevel once', function () {
    spyOn(logAdapter, 'getLogsAboveLevel');
    logManager.getLogsAboveLevel(1);
    expect(logAdapter.getLogsAboveLevel).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsById', function () {
  it('should have called getLogsById once', function () {
    spyOn(logAdapter, 'getLogsById');
    logManager.getLogsById(1);
    expect(logAdapter.getLogsById).toHaveBeenCalledTimes(1);
  });
});

describe('getLimitedLogsById', function () {
  it('should have called getLimitedLogsById once', function () {
    spyOn(logAdapter, 'getLimitedLogsById');
    logManager.getLimitedLogsById(1, 1);
    expect(logAdapter.getLimitedLogsById).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsByLevelById', function () {
  it('should have called getLogsByLevelById once', function () {
    spyOn(logAdapter, 'getLogsByLevelById');
    logManager.getLogsByLevelById(1, 1);
    expect(logAdapter.getLogsByLevelById).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsBelowLevelById', function () {
  it('should have called getLogsBelowLevelById once', function () {
    spyOn(logAdapter, 'getLogsBelowLevelById');
    logManager.getLogsBelowLevelById(1, 1);
    expect(logAdapter.getLogsBelowLevelById).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsAboveLevelById', function () {
  it('should have called getLogsAboveLevelById once', function () {
    spyOn(logAdapter, 'getLogsAboveLevelById');
    logManager.getLogsAboveLevelById(1, 1);
    expect(logAdapter.getLogsAboveLevelById).toHaveBeenCalledTimes(1);
  });
});
