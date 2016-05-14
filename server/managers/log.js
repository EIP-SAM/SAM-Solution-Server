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
  return logAdapter.getLimitedLogs(limit);
};

//
// Launch getLogsByLevel adapters and return the result
//
module.exports.getLogsByLevel = function (level) {
  return logAdapter.getLogsByLevel(level);
};

//
// Launch getLogsBelowLevel adapters and return the result
//
module.exports.getLogsBelowLevel = function (level) {
  return logAdapter.getLogsBelowLevel(level);
};

//
// Launch getLogsAboveLevel adapters and return the result
//
module.exports.getLogsAboveLevel = function (level) {
  return logAdapter.getLogsAboveLevel(level);
};

//
// Launch getLogsById from adapters and return the result
//
module.exports.getLogsById = function (userId) {
  return logAdapter.getLogsById(userId);
};

//
// Launch getLimitedLogsById from adapters and return the result
//
module.exports.getLimitedLogsById = function (userId, limit) {
  return logAdapter.getLimitedLogsById(userId, limit);
};

//
// Launch getLogsByLevelById adapters and return the result
//
module.exports.getLogsByLevelById = function (userId, level) {
  return logAdapter.getLogsByLevelById(userId, level);
};

//
// Launch getLogsBelowLevelById adapters and return the result
//
module.exports.getLogsBelowLevelById = function (userId, level) {
  return logAdapter.getLogsBelowLevelById(userId, level);
};

//
// Launch getLogsAboveLevelById adapters and return the result
//
module.exports.getLogsAboveLevelById = function (userId, level) {
  return logAdapter.getLogsAboveLevelById(userId, level);
};
