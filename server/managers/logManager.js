//
// Manager Log
//
module.exports = function initLogManager(adapters, managers) {

  managers.launchLog = function () {
    adapters.createLogger();
  };

  managers.startLog = function (header) {
    adapters.startChild(header);
  };
};
