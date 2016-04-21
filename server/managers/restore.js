//
// Manager Restore
//
module.exports = function initRestoreManagers(adapters, managers) {

  //
  // Get data from resquest
  // Call adapter
  //
  managers.createRestore = function (req, res) {
    const userId = req.body.userId;
    const saveId = req.body.saveId;
    return adapters.createRestore(userId, saveId);
  };

  //
  // Get data from resquest
  // Call adapter
  //
  managers.startRestore = function (req, res) {
    const restoreId = req.body.restoreId;
    return adapters.restoreIsStart(restoreId);
  };

  //
  // Get data from resquest
  // Call adapter
  //
  managers.restoreFinish = function (req, res) {
    const restoreId = req.body.restoreId;
    return adapters.restoreIsFinish(restoreId);
  };

  //
  // Get data from resquest
  // Call adapter
  //
  managers.restoreSuccess = function (req, res) {
    const restoreId = req.body.restoreId;
    return adapters.restoreIsSuccess(restoreId);
  };
};
