//
// Adapter Restore
//
RestoreModel = require('../models/restore');
UserModel = require('../models/users');
GroupModel = require('../models/groups');

//
// Get all users with their last restoration
//
module.exports.lastUsersRestores = function () {
  return UserModel.findAll({
    include: [{
      model: GroupModel,
    }, {
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
module.exports.createRestore = function (userId, files, saveId) {
  return RestoreModel.create({
    userId: userId,
    files: files,
    execDate: new Date(),
    saveId: saveId,
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

//
// Get number restores by day (savesScheduleds)
//
module.exports.getRestoresByDay = function () {
 var currentYear = new Date().getFullYear();
 var firstDay = new Date("Jan 01, "+ currentYear +" 01:00:00");
 var lastDay = new Date("Dec 31, " + currentYear + " 11:59:59");
 var date = new Date();
 return RestoreModel.findAndCountAll({
     where: {
       isFinish: true,
       execDate: {
         $between: [firstDay, lastDay]
       }
      },
     order: [['execDate', 'ASC']],
     group: ['execDate'],
 });
};
