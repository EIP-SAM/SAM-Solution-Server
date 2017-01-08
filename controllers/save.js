//
// Controller Save
//
const saveManager = require('../managers/save');


//
// Call to get all users with their last save
//
module.exports.lastUsersSaves = (req, res) => saveManager.lastUsersSaves(req, res);

//
// Call to get all saves of a user (past & scheduled)
//
module.exports.historySavesByUser = (req, res) => saveManager.historySavesByUser(req, res);

//
// Call to get all succeeded saves of a user
//
module.exports.historySucceededSavesByUser = (req, res) => saveManager.historySucceededSavesByUser(req, res);

//
// Call when a save is created
//
module.exports.createSave = (req, res) => {
  saveManager.createSave(req, res);
};

//
// Call when a auto or program save is removed
//
module.exports.cancelSave = (req, res) => {
  saveManager.cancelSave(req, res);
};
