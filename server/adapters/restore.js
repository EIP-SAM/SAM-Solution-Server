module.exports = function initRestoreAdapters(models, adapters) {

  adapters.createRestore = function(userId, saveId) {
    models.restore.create({
      userId: userId,
      saveId: saveId,
      execDate: new Date(),
    });
  };

  adapters.isStart = function(restoreId) {
    models.restore.findById(restoreId).then(function(restore) {
      restore.isStart = true;
      restore.save();
    });
  };

  adapters.isFinish = function(restoreId) {
    models.restore.findById(restoreId).then(function(restore) {
      restore.isFinish = true;
      restore.save();
    });
  };

  adapters.isSuccess = function(restoreId, hash) {
    models.restore.findById(restoreId).then(function(restore) {
      restore.isSuccess = true;
      restore.save();
    });
  };
};
