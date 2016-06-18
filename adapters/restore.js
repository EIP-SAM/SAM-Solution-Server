//
// Adapter Restore
//
RestoreModel = require('../models/restore');
UserModel = require('../models/users');
SaveScheduledModel = require('../models/saveScheduled');

//
// Get all users with their last restoration
//
module.exports.lastUsersRestores = function () {
  return UserModel.findAll({
    include: [{
      model: RestoreModel,
      where: { isFinish : true},
      order: [['execDate', 'DESC']],
      limit: 1,
      include: [{
        model: SaveScheduledModel,
        where: id = RestoreModel.saveScheduledId,
      }]
    }]
  });
}

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
    return restore;
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
    return restore;
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
    return restore;
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
module.exports.getRestoreByUser = function (userId) {
  return RestoreModel.findAll({
    where: {
      userId: {
        $in: userId,
      },
    },
  });
};
