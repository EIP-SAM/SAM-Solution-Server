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
  // and return the persona
  //
  controllers.startLog = function (libs, header) {
    return managers.startLog(libs, header);
  };
};
