//
// Controller Log
//
module.exports = function initLogController(libs, managers, controllers) {

  //
  // Get libs and header,
  // launch function startLog from managers
  // and return the logger.
  // The header is composed of
  // userId and moduleName.
  //
  controllers.launchLog = function (libs, header) {
    return managers.launchLog(libs, header);
  };

  //
  // Launch getLogsById from managers and return the result
  //
  controllers.getLogsById = function (userId) {
    return managers.getLogsById(userId);
  };

  //
  // Launch getLimitedLogsById from managers and return the result
  //
  controllers.getLimitedLogsById = function (userId, limit) {
    return managers.getLimitedLogsById(userId, limit);
  };
};
