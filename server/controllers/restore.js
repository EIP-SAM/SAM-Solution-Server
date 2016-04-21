//
// Controller Restoration
//
var restoreManager = require('../managers/restore');

//
// Called when a restoration is created
//
module.exports.createRestore = function (req, res) {
  restoreManager.createRestore(req, res);
};

//
// Called when a restoration is launched
//
module.exports.startRestore = function (req, res) {
  restoreManager.startRestore(req, res);
};

//
// Called when a restoration is finished
//
module.exports.restoreFinish = function (req, res) {
  restoreManager.restoreFinish(req, res);
};

//
// Called when a restoration has succeeded
//
module.exports.restoreSuccess = function (req, res) {
  return restoreManager.restoreSuccess(req, res);
};
