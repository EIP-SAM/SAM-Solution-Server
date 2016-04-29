//
// Adapter SaveSchedule
//
SaveScheduleModel = require('../models/saveSchedule');

//
// Create new SaveSchedule instance
//
module.exports.createSaveSchedule = function (userId, cron, files) {
  return SaveScheduleModel.create({
    userId: userId,
    cron: cron,
    files: files,
  });
};

//
// Disable saveSchedule instance
//
module.exports.disableSaveSchedule = function (saveScheduleId) {
  return SaveScheduleModel.findById(saveScheduleId).then(function (saveSchedule) {
    saveSchedule.isActive = false;
    saveSchedule.save();
    return saveSchedule;
  });
};
