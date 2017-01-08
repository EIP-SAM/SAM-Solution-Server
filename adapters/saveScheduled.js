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
module.exports.lastUsersSaves = () => UserModel.findAll({
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

//
// Get all saves of a user (past & scheduled)
//
module.exports.historySavesByUser = username => SaveModel.findAll({
  order: [['execDate', 'DESC']],
  include: [{
    model: SaveScheduledModel,
    include: [{
      model: UserModel,
      where: { name: username },
    }],
  }],
});

//
// Get all succeeded saves of a user
//
module.exports.historySucceededSavesByUser = username => SaveModel.findAll({
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

//
// Create new SaveScheduled instance
//
module.exports.createSaveScheduled = (userId, cron, files) => SaveScheduledModel.create({
  userId,
  cron,
  files,
});

//
// Create new save instance
//
module.exports.createSave = (saveScheduledId, date) => SaveModel.create({
  saveScheduledId,
  execDate: date,
});

//
// Disable saveScheduled instance
//
module.exports.disableSaveScheduled = saveScheduledId => SaveScheduledModel.findById(saveScheduledId).then((saveScheduled) => {
  saveScheduled.isActive = false;
  saveScheduled.save();
  return saveScheduled;
});

//
// Cancel a save
//
module.exports.cancelSave = saveId => SaveModel.findById(saveId).then((save) => {
  save.canceled = true;
  save.save();
  return save;
});

//
// Find user with savesScheduledId
//
module.exports.findUserBySaveScheduledId = saveScheduledId => UserModel.findAll({
  include: [{
    model: SaveScheduledModel,
    where: { id: saveScheduledId },
  }],
});

//
// Find saveScheduled by find
//
module.exports.findSaveScheduledById = saveScheduledId => SaveScheduledModel.findById(saveScheduledId);

//
// Search in the database a save instance with id = saveId
// Update boolean isStart
//
module.exports.saveIsStart = saveId => SaveModel.findById(saveId).then((save) => {
  save.isStart = true;
  save.save();
  return save;
});

//
// Search in the database a save instance with id = saveId
// Update boolean isFinish & isActive
//
module.exports.saveIsFinish = saveId => SaveModel.findById(saveId).then((save) => {
  save.isFinish = true;
  save.save();
  return save;
});

//
// Search in the database a save instance with id = saveId
// Update boolean isSuccess
//
module.exports.saveIsSuccess = saveId => SaveModel.findById(saveId).then((save) => {
  save.isSuccess = true;
  save.save();
  return save;
});

//
// Search in the database a save instance with id = saveId
// Save the name of the branch
//
module.exports.branchSave = (saveId, branch) => SaveModel.findById(saveId).then((save) => {
  save.hash = branch;
  save.save();
  return save;
});

//
// Find save by id
//
module.exports.findSaveById = saveId => SaveModel.findById(saveId);

//
// Get all saves of one/several users
//
module.exports.getAllSaveBySaveSchedule = saveScheduledIds => SaveModel.findAll({
  where: {
    saveScheduledId: {
      $in: saveScheduledIds,
    },
  },
});

//
// Get all active of all users
//
module.exports.getAllSaveScheduleActive = () => SaveScheduledModel.findAll({
  where: {
    isActive: true,
  },
});

//
// Get number saves by day (savesScheduleds)
//
module.exports.getSavesByDay = () => {
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
