//
// Manager Log
//
module.exports = function initLogManager(adapters, managers) {

  managers.launchLog = function (model) {
    adapters.createLogger(model);
  };

  managers.startLog = function (header) {
    adapters.startChild(header);
  };
};
