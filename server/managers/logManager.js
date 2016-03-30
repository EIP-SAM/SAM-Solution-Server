//
// Manager Log
//
module.exports = function initLogManager(adapter, manager) {

  manager.launchLog = function (model) {
    adapter.createLogger(model);
  };

  manager.startLog = function (header) {
    adapter.startChild(header);
  };
};
