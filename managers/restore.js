//
// Manager Restore
//
var restoreAdapter = require('../adapters/restore');

//
// Get all users with their last restoration
//
module.exports.lastUsersRestores = function (req, res) {
  return restoreAdapter.lastUsersRestores();
}

//
// Get username from request
// Get all restorations of a user
//
module.exports.historyRestoreByUser = function (req, res) {
  const username = req.body.username;
  return restoreAdapter.historyRestoreByUser(username);
}

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

//
// Get data from request
// Check to get:
//   - all restorations of all user
//   - all restorations of one/several users
// Call adapter
//
module.exports.getHistoryRestore = function (req, res) {
  const userId = []; // init with req.body
  if (userId.length === 0)
    return restoreAdapter.getAllRestore();
  return restoreAdapter.getRestoreByUser(userId);
};
