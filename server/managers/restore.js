//
// Manager Restore
//
module.exports = function initRestoreManagers(adapters, managers) {

  managers.launchRestore = function(userId, saveId) {
    adapters.createRestore(userId, saveId);
  };

  managers.startRestore = function(restoreId) {
    adapters.restoreIsStart(restoreId);
  };

  managers.restoreFinish = function(restoreId) {
    adapters.restoreIsFinish(restoreId);
  };

  managers.restoreSuccess = function(restoreId) {
    adapters.restoreIsSuccess(restoreId);
  };
};
