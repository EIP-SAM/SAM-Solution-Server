//
// Adapter SaveSchedule
//
module.exports = function initSaveScheduleAdapters(models, adapters) {

  //
  // Create new SaveSchedule instance
  //
  adapters.createSaveSchedule = function(userId, cron, files) {
    return models.saveSchedule.create({
      userId: userId,
      cron: cron,
      files: files,
    });
  };

  //
  // Disable saveSchedule instance
  //
  adapters.disableSaveSchedule = function(saveScheduleId) {
    models.saveSchedule.findById(saveScheduleId).then(function(saveSchedule) {
      saveSchedule.isActive = false;
      saveSchedule.save();
    });
  };

};
