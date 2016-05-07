//
// Adapter SaveScheduled
//
SaveScheduledModel = require('../models/saveScheduled');

//
// Create new SaveScheduled instance
//
module.exports.createSaveScheduled = function (userId, cron, files) {
  return SaveScheduledModel.create({
    userId: userId,
    cron: cron,
    files: files,
  });
};

//
// Disable saveScheduled instance
//
module.exports.disableSaveScheduled = function (saveScheduledId) {
  return SaveScheduledModel.findById(saveScheduledId).then(function (saveScheduled) {
    saveScheduled.isActive = false;
    saveScheduled.save();
    return saveScheduled;
  });
};

//
// Find saveScheduled by find
//
module.exports.findSaveScheduledById = function (saveScheduledId) {
  return SaveScheduledModel.findById(saveScheduledId);
};
