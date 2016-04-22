//
// Controller Save
//
var saveManager = require('../managers/save');

//
// Call when a save is created
//
module.exports.createSave = function (req, res) {
  return saveManager.createSave(req, res);
};

//
// Call when a save is started
//
module.exports.startSave = function (req, res) {
  return saveManager.startSave(req, res);
};

//
// Call when a save is finished
//
module.exports.saveFinish = function (req, res) {
  return saveManager.saveFinish(req, res);
};

//
// Call when a save has succeeded
//
module.exports.saveSuccess = function (req, res) {
  return saveManager.saveSuccess(req, res);
};

//
// Call when a auto or program save is removed
//
module.exports.removeSave = function (req, res) {
  return saveManager.removeSave(req, res);
};
