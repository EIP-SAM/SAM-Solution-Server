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

//
// Get all saveScheduled of all users
//
module.exports.getAllSaveScheduled = function () {
  return SaveScheduledModel.findAll({
    order: 'id',
  });
};

//
// Get all saveScheduled of one/several users
//
module.exports.getAllSaveScheduledByUser = function (userId) {
  return SaveScheduledModel.findAll({
    where: {
      userId: {
        $in: userId,
      },
    },
  });
};

//
// Get all active of all users
//
module.exports.getAllSaveScheduleActive = function () {
  return SaveScheduledModel.findAll({
    where: {
      isActive: true,
    },
  });
};
