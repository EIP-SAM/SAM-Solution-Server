//
// Controller Save
//
var saveManager = require('../managers/save');


//
// Call to get all users with their last save
//
module.exports.lastUsersSaves = function (req, res) {
  return saveManager.lastUsersSaves(req, res);
}

//
// Call to get all saves of a user (past & scheduled)
//
module.exports.historySavesByUser = function (req, res) {
  return saveManager.historySavesByUser(req, res);
}

//
// Call when a save is created
//
module.exports.createSave = function (req, res) {
  saveManager.createSave(req, res);
};

//
// Call when a auto or program save is removed
//
module.exports.cancelSave = function (req, res) {
  saveManager.cancelSave(req, res);
};

//
// Called to get history of saves
//
module.exports.getHistorySave = function (req, res) {
  return saveManager.getHistorySave(req, res);
};
