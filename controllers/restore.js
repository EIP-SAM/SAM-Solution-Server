//
// Controller Restoration
//
const restoreManager = require('../managers/restore');

//
// Call to get all users with their last restoration
//
module.exports.lastUsersRestores = (req, res) => restoreManager.lastUsersRestores(req, res);

//
// Call to get all restorations of a user
//
module.exports.historyRestoreByUser = (req, res) => restoreManager.historyRestoreByUser(req, res);

//
// Called when a restoration is created
//
module.exports.createRestore = (req, res) => restoreManager.createRestore(req, res);
