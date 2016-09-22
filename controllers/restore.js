//
// Controller Restoration
//
var restoreManager = require('../managers/restore');

//
// Call to get all users with their last restoration
//
module.exports.lastUsersRestores = function (req, res) {
  return restoreManager.lastUsersRestores(req, res);
}

//
// Call to get all restorations of a user
//
module.exports.historyRestoreByUser = function(req, res) {
  return restoreManager.historyRestoreByUser(req, res);
}

//
// Called when a restoration is created
//
module.exports.createRestore = function (req, res) {
  return restoreManager.createRestore(req, res);
};
