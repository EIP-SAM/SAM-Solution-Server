//
// Adapter Save
//
module.exports = function initSaveAdapters(models, adapters) {

  //
  // Create new save instance
  //
  adapters.createSave = function(saveSchedule, date) {
    models.save.create({
      saveScheduleId: saveSchedule,
      execDate: date,
    });
  };

  //
  // Search in the database a save instance with id = saveId
  // Update boolean isStart
  //
  adapters.saveIsStart = function(saveId) {
    models.save.findById(saveId).then(function(save) {
      save.isStart = true;
      save.save();
    });
  };

  //
  // Search in the database a save instance with id = saveId
  // Update boolean isFinish
  //
  adapters.saveIsFinish = function(saveId) {
    models.save.findById(saveId).then(function(save) {
      save.isFinish = true;
      save.save();
    });
  };

  //
  // Search in the database a save instance with id = saveId
  // Update boolean isSuccess
  //
  adapters.saveIsSuccess = function(saveId) {
    models.save.findById(saveId).then(function(save) {
      save.isSuccess = true;
      save.save();
    });
  };

  //
  // Search in the database a save instance with id = saveId
  // Save the hash of the commit
  //
  adapters.hashSave = function(hash) {
    return models.save.findById(saveId).then(function(save) {
      save.hash = true;
      save.save();
    });
  };

};
