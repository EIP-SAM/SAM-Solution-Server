//
// Adapter SaveScheduled
//
const SaveScheduledModel = require('../models/saveScheduled');
const UserModel = require('../models/users');
const SaveModel = require('../models/save');
const GroupModel = require('../models/groups');

//
// Get all users with their last saves (savesScheduleds & saves)
//
module.exports.lastUsersSaves = function () {
  return UserModel.findAll({
    include: [{
      model: GroupModel,
    }, {
      model: SaveScheduledModel,
      include: [{
        model: SaveModel,
        where: { isFinish: true },
        order: [['execDate', 'DESC']],
        limit: 1,
      }],
    }],
  });
};

//
// Get all saves of a user (past & scheduled)
//
module.exports.historySavesByUser = function (username) {
  return SaveModel.findAll({
    order: [['execDate', 'DESC']],
    include: [{
      model: SaveScheduledModel,
      include: [{
        model: UserModel,
        where: { name: username },
      }],
    }],
  });
};

//
// Get all succeeded saves of a user
//
module.exports.historySucceededSavesByUser = function (username) {
  return SaveModel.findAll({
    order: [['execDate', 'DESC']],
    where: { isSuccess: true },
    include: [{
      model: SaveScheduledModel,
      include: [{
        model: UserModel,
        where: { name: username },
      }],
    }],
  });
};

//
// Create new SaveScheduled instance
//
module.exports.createSaveScheduled = function (userId, cron, files) {
  return SaveScheduledModel.create({
    userId,
    cron,
    files,
  });
};

//
// Create new save instance
//
module.exports.createSave = function (saveScheduledId, date) {
  return SaveModel.create({
    saveScheduledId,
    execDate: date,
  });
};

//
// Disable saveScheduled instance
//
module.exports.disableSaveScheduled = function (saveScheduledId) {
  return SaveScheduledModel.findById(saveScheduledId).then((saveScheduled) => {
    saveScheduled.isActive = false;
    saveScheduled.save();
    return saveScheduled;
  });
};

//
// Cancel a save
//
module.exports.cancelSave = function (saveId) {
  return SaveModel.findById(saveId).then((save) => {
    save.canceled = true;
    save.save();
    return save;
  });
};

//
// Find user with savesScheduledId
//
module.exports.findUserBySaveScheduledId = function (saveScheduledId) {
  return UserModel.findAll({
    include: [{
      model: SaveScheduledModel,
      where: { id: saveScheduledId },
    }],
  });
};

//
// Find saveScheduled by find
//
module.exports.findSaveScheduledById = function (saveScheduledId) {
  return SaveScheduledModel.findById(saveScheduledId);
};

//
// Search in the database a save instance with id = saveId
// Update boolean isStart
//
module.exports.saveIsStart = function (saveId) {
  return SaveModel.findById(saveId).then((save) => {
    save.isStart = true;
    save.save();
    return save;
  });
};

//
// Search in the database a save instance with id = saveId
// Update boolean isFinish & isActive
//
module.exports.saveIsFinish = function (saveId) {
  return SaveModel.findById(saveId).then((save) => {
    save.isFinish = true;
    save.save();
    return save;
  });
};

//
// Search in the database a save instance with id = saveId
// Update boolean isSuccess
//
module.exports.saveIsSuccess = function (saveId) {
  return SaveModel.findById(saveId).then((save) => {
    save.isSuccess = true;
    save.save();
    return save;
  });
};

//
// Search in the database a save instance with id = saveId
// Save the name of the branch
//
module.exports.branchSave = function (saveId, branch) {
  return SaveModel.findById(saveId).then((save) => {
    save.hash = branch;
    save.save();
    return save;
  });
};

//
// Find save by id
//
module.exports.findSaveById = function (saveId) {
  return SaveModel.findById(saveId);
};

//
// Get all saves of one/several users
//
module.exports.getAllSaveBySaveSchedule = function (saveScheduledIds) {
  return SaveModel.findAll({
    where: {
      saveScheduledId: {
        $in: saveScheduledIds,
      },
    },
  });
};

//
// Get all active of all users
//
module.exports.getAllSaveScheduleActive = function () {
  return SaveScheduledModel.findAll({
    where: {
      isActive: true,
    },
  });
};

//
// Get number saves by day (savesScheduleds)
//
module.exports.getSavesByDay = function () {
  const currentYear = new Date().getFullYear();
  const firstDay = new Date(`Jan 01, ${currentYear} 01:00:00`);
  const lastDay = new Date(`Dec 31, ${currentYear} 11:59:59`);
  return SaveModel.findAndCountAll({
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
