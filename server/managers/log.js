//
// Manager Log
//
var logAdapter = require('../adapters/log');

//
// Get libs and header in parameter,
// launch function createLog from adapters
// and return it to controllers
//
module.exports.launchLog = function (libs, header) {
  return logAdapter.createChild(libs, header);
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
