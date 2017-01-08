//
// Adapter Restore
//
const RestoreModel = require('../models/restore');
const UserModel = require('../models/users');
const GroupModel = require('../models/groups');

//
// Get all users with their last restoration
//
module.exports.lastUsersRestores = () => UserModel.findAll({
  include: [{
    model: GroupModel,
  }, {
    model: RestoreModel,
    where: { isFinish: true },
    order: [['execDate', 'DESC']],
    limit: 1,
  }],
});

//
// Get all restorations of a user
//
module.exports.historyRestoreByUser = username => RestoreModel.findAll({
  order: [['execDate', 'DESC']],
  include: [{
    model: UserModel,
    where: { name: username },
  }],
});


//
// Create new restore instance
//
module.exports.createRestore = (userId, files, saveId) => RestoreModel.create({
  userId,
  files,
  execDate: new Date(),
  saveId,
});

//
// Find user with restoreId
//
module.exports.findUserByRestoreId = restoreId => UserModel.findAll({
  include: [{
    model: RestoreModel,
    where: { id: restoreId },
  }],
});

//
// Search in the database a restore instance with id = restoreId
// Update boolean isStart
//
module.exports.restoreIsStart = restoreId => RestoreModel.findById(restoreId).then((restore) => {
  restore.isStart = true;
  restore.save();
  return restore;
});

//
// Search in the database a restore instance with id = restoreId
// Update boolean isFinish
//
module.exports.restoreIsFinish = restoreId => RestoreModel.findById(restoreId).then((restore) => {
  restore.isFinish = true;
  restore.save();
  return restore;
});

//
// Search in the database a restore instance with id = restoreId
// Update boolean isSucess
//
module.exports.restoreIsSuccess = restoreId => RestoreModel.findById(restoreId).then((restore) => {
  restore.isSuccess = true;
  restore.save();
  return restore;
});

//
// Get all restorations of all users
//
module.exports.getAllRestore = () => RestoreModel.findAll();

//
// Get all restorations of one/several users
//
module.exports.getRestoreByUser = userId => RestoreModel.findAll({
  where: {
    userId: {
      $in: userId,
    },
  },
});

//
// Get number restores by day (savesScheduleds)
//
module.exports.getRestoresByDay = () => {
  const currentYear = new Date().getFullYear();
  const firstDay = new Date(`Jan 01, ${currentYear} 01:00:00`);
  const lastDay = new Date(`Dec 31, ${currentYear} 11:59:59`);

  return RestoreModel.findAndCountAll({
    where: {
      isFinish: true,
      execDate: {
        $between: [firstDay, lastDay],
      },
    },
    order: [['execDate', 'ASC']],
    group: ['execDate'],
  });
};
