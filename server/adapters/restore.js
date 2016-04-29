//
// Adapter Restore
//
RestoreModel = require('../models/restore');

//
// Create new restore instance
//
module.exports.createRestore = function (userId, saveId) {
  return RestoreModel.create({
    userId: userId,
    saveId: saveId,
    execDate: new Date(),
  });
};

//
// Search in the database a restore instance with id = restoreId
// Update boolean isStart
//
module.exports.restoreIsStart = function (restoreId) {
  return RestoreModel.findById(restoreId).then(function (restore) {
    restore.isStart = true;
    restore.save();
  });
};

//
// Search in the database a restore instance with id = restoreId
// Update boolean isFinish
//
module.exports.restoreIsFinish = function (restoreId) {
  return RestoreModel.findById(restoreId).then(function (restore) {
    restore.isFinish = true;
    restore.save();
  });
};

//
// Search in the database a restore instance with id = restoreId
// Update boolean isSucess
//
module.exports.restoreIsSuccess = function (restoreId) {
  return RestoreModel.findById(restoreId).then(function (restore) {
    restore.isSuccess = true;
    restore.save();
  });
};

//
// Get all restorations of all users
//
module.exports.getAllRestore = function () {
  return RestoreModel.findAll();
};

//
// Get all restorations of one/several users
//
module.exports.getRestoreByUserId = function (userId) {
  return RestoreModel.findAll({
    where: {
      userId: {
        $in: userId,
      },
    },
  });
};
