//
// Manager Restore
//
var restoreAdapter = require('../adapters/restore');

//
// Get data from resquest
// Call adapter
//
module.exports.createRestore = function (req, res) {
  const userId = req.body.userId;
  const saveId = req.body.saveId;
  return restoreAdapter.createRestore(userId, saveId);
};

//
// Get data from resquest
// Call adapter
//
module.exports.startRestore = function (req, res) {
  const restoreId = req.body.restoreId;
  return restoreAdapter.restoreIsStart(restoreId);
};

//
// Get data from resquest
// Call adapter
//
module.exports.restoreFinish = function (req, res) {
  const restoreId = req.body.restoreId;
  return restoreAdapter.restoreIsFinish(restoreId);
};

//
// Get data from resquest
// Call adapter
//
module.exports.restoreSuccess = function (req, res) {
  const restoreId = req.body.restoreId;
  return restoreAdapter.restoreIsSuccess(restoreId);
};

module.exports.getHistoryRestore = function (req, res) {
  const userId = []; // init with req.body
  if (userId.length === 0)
    return restoreAdapter.getAllRestore();
  return restoreAdapter.getRestoreByUserId(userId);
};
