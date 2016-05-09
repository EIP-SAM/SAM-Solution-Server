//
// Manager Log
//
var logAdapter = require('../adapters/log');

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
  return logAdapter.getLogs();
};

//
// Launch getLimitedLogsfrom adapters and return the result
//
module.exports.getLimitedLogs = function (limit) {
  return logAdapter.getLimitedLogs(limit);
};

//
// Launch getAllLogsByLevel adapters and return the result
//
module.exports.getAllLogsByLevel = function (level) {
  return logAdapter.getAllLogsByLevel(level);
};

//
// Launch getAllLogsBelowLevel adapters and return the result
//
module.exports.getAllLogsBelowLevel = function (level) {
  return logAdapter.getAllLogsBelowLevel(level);
};

//
// Launch getAllLogsAboveLevel adapters and return the result
//
module.exports.getAllLogsAboveLevel = function (level) {
  return logAdapter.getAllLogsAboveLevel(level);
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
