//
// Controller Log
//
module.exports = function initLogController(libs, managers, controllers) {

  //
  // Get libs in parameter and launch function launchLog from managers
  //
  controllers.launchLog = function (libs) {
    managers.launchLog(libs);
  };

  //
  // Get libs and header,
  // launch function startLog from managers
  // and return the logger.
  // The header is composed of
  // userId and moduleName.
  //
  controllers.startLog = function (libs, header) {
    return managers.startLog(libs, header);
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
