//
// Unit test for log adapter
//
var logAdapter = require('../../adapters/log');
var logModel = require('../../models/log');
var logger  = require('../../libs/bunyan');

describe('getLogs', function () {
  it('should return a promise', function () {
    var logs = logAdapter.getLogs();
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogs();
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {
    var object = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'exec');
    logAdapter.getLogs();
    expect(object.exec).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsByLevel', function () {
  var level = 1;

  it('should return a promise', function () {
    var logs = logAdapter.getLogsByLevel(level);
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogsByLevel(level);
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {
    var object = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'exec');
    logAdapter.getLogsByLevel(level);
    expect(object.exec).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsBelowLevel', function () {
  var level = 1;

  it('should return a promise', function () {
    var logs = logAdapter.getLogsBelowLevel(level);
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogsBelowLevel(level);
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {
    var object = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'exec');
    logAdapter.getLogsBelowLevel(level);
    expect(object.exec).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsAboveLevel', function () {
  var level = 1;

  it('should return a promise', function () {
    var logs = logAdapter.getLogsAboveLevel(level);
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogsAboveLevel(level);
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {
    var object = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'exec');
    logAdapter.getLogsAboveLevel(level);
    expect(object.exec).toHaveBeenCalledTimes(1);
  });
});

describe('getLimitedLogs', function () {
  var limit = 1;

  it('should return a promise', function () {
    var logs = logAdapter.getLimitedLogs(limit);
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLimitedLogs(limit);
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called limit once', function () {
    var object = { limit: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'limit');
    logAdapter.getLimitedLogs(limit);
    expect(object.limit).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {
    var objectLimit = { limit: function () {
        return;
      }, };

    var objectExec = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(objectLimit);
    spyOn(objectLimit, 'limit').and.returnValue(objectExec);
    spyOn(objectExec, 'exec');
    logAdapter.getLimitedLogs(limit);
    expect(objectExec.exec).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsByModuleName', function () {
  var moduleName = 'log';

  it('should return a promise', function () {
    var logs = logAdapter.getLogsByModuleName(moduleName);

    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogsByModuleName(moduleName);
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {

    var objectExec = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(objectExec);
    spyOn(objectExec, 'exec');
    logAdapter.getLogsByModuleName(moduleName);
    expect(objectExec.exec).toHaveBeenCalledTimes(1);
  });
});

describe('getLimitedLogsByModuleName', function () {
  var moduleName = 'log';
  var limit = 1;

  it('should return a promise', function () {
    var logs = logAdapter.getLimitedLogsByModuleName(moduleName, limit);

    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogsByModuleName(moduleName);
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called limit once', function () {
    var object = { limit: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'limit');
    logAdapter.getLimitedLogsByModuleName(moduleName, limit);
    expect(object.limit).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {

    var objectLimit = { limit: function () {
        return;
      }, };

    var objectExec = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(objectLimit);
    spyOn(objectLimit, 'limit').and.returnValue(objectExec);
    spyOn(objectExec, 'exec');
    logAdapter.getLimitedLogsByModuleName(moduleName, limit);
    expect(objectLimit.limit).toHaveBeenCalledTimes(1);
    expect(objectExec.exec).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsById', function () {
  var userId = 1;

  it('should return a promise', function () {
    var logs = logAdapter.getLogsById(userId);
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogsById(userId);
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {
    var object = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'exec');
    logAdapter.getLogsById(userId);
    expect(object.exec).toHaveBeenCalledTimes(1);
  });
});

describe('getLimitedLogsById Adapters', function () {
  var userId = 1;
  var limit = 1;

  it('should return a promise', function () {
    var logs = logAdapter.getLimitedLogsById(userId, limit);
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLimitedLogsById(userId, limit);
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called limit once', function () {
    var object = { limit: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'limit');
    logAdapter.getLimitedLogsById(userId, limit);
    expect(object.limit).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {
    var objectLimit = { limit: function () {
        return;
      }, };

    var objectExec = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(objectLimit);
    spyOn(objectLimit, 'limit').and.returnValue(objectExec);
    spyOn(objectExec, 'exec');
    logAdapter.getLimitedLogsById(userId, limit);
    expect(objectExec.exec).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsByLevelById', function () {
  var userId = 1;
  var level = 1;

  it('should return a promise', function () {
    var logs = logAdapter.getLogsByLevelById(userId, level);
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogsByLevelById(userId, level);
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {
    var object = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'exec');
    logAdapter.getLogsByLevelById(userId, level);
    expect(object.exec).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsBelowLevelById', function () {
  var userId = 1;
  var level = 1;

  it('should return a promise', function () {
    var logs = logAdapter.getLogsBelowLevelById(userId, level);
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogsBelowLevelById(userId, level);
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {
    var object = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'exec');
    logAdapter.getLogsBelowLevelById(userId, level);
    expect(object.exec).toHaveBeenCalledTimes(1);
  });
});

describe('getLogsAboveLevelById', function () {
  var userId = 1;
  var level = 1;

  it('should return a promise', function () {
    var logs = logAdapter.getLogsAboveLevelById(userId, level);
    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogsAboveLevelById(userId, level);
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {
    var object = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'exec');
    logAdapter.getLogsAboveLevelById(userId, level);
    expect(object.exec).toHaveBeenCalledTimes(1);
  });

  describe('getLogsByModuleNameById', function () {
    var userId = 1;
    var moduleName = 'log';

    it('should return a promise', function () {
      var logs = logAdapter.getLogsByModuleNameById(userId, moduleName);

      expect(typeof logs.then === 'function').toBeTruthy();
    });

    it('should have called find once', function () {
      spyOn(logModel, 'find');
      logAdapter.getLogsByModuleNameById(userId, moduleName);
      expect(logModel.find).toHaveBeenCalledTimes(1);
    });

    it('should have called exec once', function () {

      var objectExec = { exec: function () {
          return;
        }, };

      spyOn(logModel, 'find').and.returnValue(objectExec);
      spyOn(objectExec, 'exec');
      logAdapter.getLogsByModuleNameById(userId, moduleName);
      expect(objectExec.exec).toHaveBeenCalledTimes(1);
    });
  });

  describe('getLimitedLogsByModuleNameById', function () {
    var userId = 1;
    var moduleName = 'log';
    var limit = 1;

    it('should return a promise', function () {
      var logs = logAdapter.getLimitedLogsByModuleNameById(userId, moduleName, limit);

      expect(typeof logs.then === 'function').toBeTruthy();
    });

    it('should have called find once', function () {
      spyOn(logModel, 'find');
      logAdapter.getLimitedLogsByModuleNameById(userId, moduleName);
      expect(logModel.find).toHaveBeenCalledTimes(1);
    });

    it('should have called limit once', function () {
      var object = { limit: function () {
          return;
        }, };

      spyOn(logModel, 'find').and.returnValue(object);
      spyOn(object, 'limit');
      logAdapter.getLimitedLogsByModuleNameById(userId, moduleName, limit);
      expect(object.limit).toHaveBeenCalledTimes(1);
    });

    it('should have called exec once', function () {

      var objectLimit = { limit: function () {
          return;
        }, };

      var objectExec = { exec: function () {
          return;
        }, };

      spyOn(logModel, 'find').and.returnValue(objectLimit);
      spyOn(objectLimit, 'limit').and.returnValue(objectExec);
      spyOn(objectExec, 'exec');
      logAdapter.getLimitedLogsByModuleNameById(userId, moduleName, limit);
      expect(objectLimit.limit).toHaveBeenCalledTimes(1);
      expect(objectExec.exec).toHaveBeenCalledTimes(1);
    });
  });
});
