//
// Controller Log
//

var logManager = require('../managers/log');

//
// Get libs and header,
// launch function startLog from managers
// and return the logger.
// The header is composed of
// userId and moduleName.
//
module.exports.launchLog = function (header) {
  return logManagers.launchLog(header);
};

//
// Launch getLogsById from managers and return the result
//
module.exports.getLogsById = function (userId) {
  return logManagers.getLogsById(userId);
};

//
// Launch getLimitedLogsById from managers and return the result
//
module.exports.getLimitedLogsById = function (userId, limit) {
  return logManagers.getLimitedLogsById(userId, limit);
};
