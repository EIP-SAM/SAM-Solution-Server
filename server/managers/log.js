//
// Manager Log
//
const logAdapter = require('../adapters/log');

//
// Get libs and header in parameter,
// launch function createLog from adapters
// and return it to controllers
//
module.exports.launchLog = function (header) {
  return logAdapter.createChild(header);
};

//
// Launch getLogsfrom adapters and return the result
//
module.exports.getLogs = function () {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLogs();

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};

//
// Launch getLimitedLogsfrom adapters and return the result
//
module.exports.getLimitedLogs = function (limit) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLimitedLogs(limit);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};

//
// Launch getLogsByLevel adapters and return the result
//
module.exports.getLogsByLevel = function (level) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLogsByLevel(level);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });

};

//
// Launch getLogsBelowLevel adapters and return the result
//
module.exports.getLogsBelowLevel = function (level) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLogsBelowLevel(level);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};

//
// Launch getLogsAboveLevel adapters and return the result
//
module.exports.getLogsAboveLevel = function (level) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLogsAboveLevel(level);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};

//
// Launch getLogByModuleName adapters and return the result
//
module.exports.getLogByModuleName = function (moduleName) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLogByModuleName(moduleName);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};

//
// Launch getLimitedLogByModuleName adapters and return the result
//
module.exports.getLimitedLogByModuleName = function (moduleName, limit) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLimitedLogByModuleName(moduleName, limit);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};

//
// Launch getLogsById from adapters and return the result
//
module.exports.getLogsById = function (userId) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLogsById(userId);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};

//
// Launch getLimitedLogsById from adapters and return the result
//
module.exports.getLimitedLogsById = function (userId, limit) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLimitedLogsById(userId, limit);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};

//
// Launch getLogsByLevelById adapters and return the result
//
module.exports.getLogsByLevelById = function (userId, level) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLogsByLevelById(userId, level);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};

//
// Launch getLogsBelowLevelById adapters and return the result
//
module.exports.getLogsBelowLevelById = function (userId, level) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLogsBelowLevelById(userId, level);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};

//
// Launch getLogsAboveLevelById adapters and return the result
//
module.exports.getLogsAboveLevelById = function (userId, level) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLogsAboveLevelById(userId, level);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};

//
// Launch getLogByModuleNameById adapters and return the result
//
module.exports.getLogByModuleNameById = function (moduleName) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLogByModuleNameById(moduleName, userId);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};

//
// Launch getLimitedLogByModuleName adapters and return the result
//
module.exports.getLimitedLogByModuleNameById = function (moduleName, limit) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLimitedLogByModuleNameById(moduleName, limit, userId);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};
