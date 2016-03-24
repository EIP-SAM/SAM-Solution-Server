//
// Adapter Restore
//
module.exports = function initRestoreAdapters(models, adapters) {

  //
  // Create new restore instance
  //
  adapters.createRestore = function(userId, saveId) {
    models.restore.create({
      userId: userId,
      saveId: saveId,
      execDate: new Date(),
    });
  };

  //
  // Search in the database a restore instance with id = restoreId
  // Update boolean isStart
  //
  adapters.restoreIsStart = function(restoreId) {
    models.restore.findById(restoreId).then(function(restore) {
      restore.isStart = true;
      restore.save();
    });
  };

  //
  // Search in the database a restore instance with id = restoreId
  // Update boolean isFinish
  //
  adapters.restoreIsFinish = function(restoreId) {
    models.restore.findById(restoreId).then(function(restore) {
      restore.isFinish = true;
      restore.save();
    });
  };

  //
  // Search in the database a restore instance with id = restoreId
  // Update boolean isSucess
  //
  adapters.restoreIsSuccess = function(restoreId) {
    models.restore.findById(restoreId).then(function(restore) {
      restore.isSuccess = true;
      restore.save();
    });
  };
};
