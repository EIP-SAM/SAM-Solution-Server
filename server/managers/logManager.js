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
};
