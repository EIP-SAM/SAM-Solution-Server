//
// Adapter Restore
//
RestoreModel = require('../models/restore');
UserModel = require('../models/users');

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
    }]
  });
}

//
// Get all restorations of a user
//
module.exports.historyRestoreByUser = function(username) {
  return RestoreModel.findAll({
    order: [['execDate', 'DESC']],
    include: [{
      model: UserModel,
      where: { name: username },
    }]
  })
}


//
// Create new restore instance
//
module.exports.createRestore = function (userId, files) {
  return RestoreModel.create({
    userId: userId,
    files: files,
    execDate: new Date(),
  });
};

//
// Find user with restoreId
//
module.exports.findUserByRestoreId = function (restoreId) {
    return UserModel.findAll({
      include: [{
        model: RestoreModel,
        where: { id: restoreId },
      }],
    });
}

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
