//
// Unit test for log adapter
//
var logAdapter = require('../../adapters/log');
var logModel = require('../../models/log');
var logger  = require('../../libs/bunyan');

describe('createChild', function () {
  var header;

  beforeAll(function () {
    header = { moduleName: 'restore', userID: 15 };
  });

  it('should not return null or undefined object', function () {
    var child = logAdapter.createChild(header);
    expect(child).not.toBeNull();
    expect(child).toBeDefined();
  });

  it('should have called child once', function () {
    spyOn(logger, 'child');
    logAdapter.createChild(header);
    expect(logger.child).toHaveBeenCalledTimes(1);
  });
});

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

describe('getLogByModuleName', function () {
  var moduleName = 'log';

  it('should return a promise', function () {
    var logs = logAdapter.getLogByModuleName(moduleName);

    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogByModuleName(moduleName);
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called exec once', function () {

    var objectExec = { exec: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(objectExec);
    spyOn(objectExec, 'exec');
    logAdapter.getLogByModuleName(moduleName);
    expect(objectExec.exec).toHaveBeenCalledTimes(1);
  });
});

describe('getLimitedLogByModuleName', function () {
  var moduleName = 'log';
  var limit = 1;

  it('should return a promise', function () {
    var logs = logAdapter.getLimitedLogByModuleName(moduleName, limit);

    expect(typeof logs.then === 'function').toBeTruthy();
  });

  it('should have called find once', function () {
    spyOn(logModel, 'find');
    logAdapter.getLogByModuleName(moduleName);
    expect(logModel.find).toHaveBeenCalledTimes(1);
  });

  it('should have called limit once', function () {
    var object = { limit: function () {
        return;
      }, };

    spyOn(logModel, 'find').and.returnValue(object);
    spyOn(object, 'limit');
    logAdapter.getLimitedLogByModuleName(moduleName, limit);
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
    logAdapter.getLimitedLogByModuleName(moduleName, limit);
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

describe('getLimitedLogsById', function () {
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

  describe('getLogByModuleNameById', function () {
    var userId = 1;
    var moduleName = 'log';

    it('should return a promise', function () {
      var logs = logAdapter.getLogByModuleNameById(userId, moduleName);

      expect(typeof logs.then === 'function').toBeTruthy();
    });

    it('should have called find once', function () {
      spyOn(logModel, 'find');
      logAdapter.getLogByModuleNameById(userId, moduleName);
      expect(logModel.find).toHaveBeenCalledTimes(1);
    });

    it('should have called exec once', function () {

      var objectExec = { exec: function () {
          return;
        }, };

      spyOn(logModel, 'find').and.returnValue(objectExec);
      spyOn(objectExec, 'exec');
      logAdapter.getLogByModuleNameById(userId, moduleName);
      expect(objectExec.exec).toHaveBeenCalledTimes(1);
    });
  });

  describe('getLimitedLogByModuleNameById', function () {
    var userId = 1;
    var moduleName = 'log';
    var limit = 1;

    it('should return a promise', function () {
      var logs = logAdapter.getLimitedLogByModuleNameById(userId, moduleName, limit);

      expect(typeof logs.then === 'function').toBeTruthy();
    });

    it('should have called find once', function () {
      spyOn(logModel, 'find');
      logAdapter.getLimitedLogByModuleNameById(userId, moduleName);
      expect(logModel.find).toHaveBeenCalledTimes(1);
    });

    it('should have called limit once', function () {
      var object = { limit: function () {
          return;
        }, };

      spyOn(logModel, 'find').and.returnValue(object);
      spyOn(object, 'limit');
      logAdapter.getLimitedLogByModuleNameById(userId, moduleName, limit);
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
      logAdapter.getLimitedLogByModuleNameById(userId, moduleName, limit);
      expect(objectLimit.limit).toHaveBeenCalledTimes(1);
      expect(objectExec.exec).toHaveBeenCalledTimes(1);
    });
  });
});
