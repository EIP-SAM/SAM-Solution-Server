//
// Manager Log
//
module.exports = function initLogManager(adapters, managers) {

  //
  // Get libs in parameter and launch function createLogger from adapters
  //
  managers.launchLog = function (libs) {
    adapters.createLogger(libs);
  };

  //
  // Get libs and header in parameter,
  // launch function createLog from adapters
  // and return it to controllers
  //
  managers.startLog = function (libs, header) {
    return adapters.createChild(libs, header);
  };

  //
  // Launch getLogsById from adapters and return the result
  //
  managers.getLogsById = function (userId) {
    return adapters.getLogsById(userId);
  };

  //
  // Launch getLimitedLogsById from adapters and return the result
  //
  managers.getLimitedLogsById = function (userId, limit) {
    return adapters.getLimitedLogsById(userId, limit);
  };
};
