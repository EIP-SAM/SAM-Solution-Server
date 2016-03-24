module.exports = function initRestoreManagers(adapters, managers) {

  managers.launchRestore = function(userId, saveId) {
    adapters.createRestore(userId, saveId);
  };

  managers.startRestore = function(restoreId) {
    adapters.isStart(restoreId);
  };

  managers.restoreFinish = function(restoreId) {
    adapters.isFinish(restoreId);
  };

  managers.restoreSuccess = function(restoreId, hash) {
    adapters.isSuccess(restoreId, hash);
  };
};
