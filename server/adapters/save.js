//
// Adapter Save
//
SaveModel = require('../models/save');

//
// Create new save instance
//
module.exports.createSave = function (saveScheduledId, date) {
  return SaveModel.create({
    saveScheduledId: saveScheduledId,
    execDate: date,
  });
};

//
// Search in the database a save instance with id = saveId
// Update boolean isStart
//
module.exports.saveIsStart = function (saveId) {
  return SaveModel.findById(saveId).then(function (save) {
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
  return SaveModel.findById(saveId).then(function (save) {
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
  return SaveModel.findById(saveId).then(function (save) {
    save.isSuccess = true;
    save.save();
    return save;
  });
};

//
// Search in the database a save instance with id = saveId
// Save the hash of the commit
//
module.exports.hashSave = function (saveId, hash) {
  return SaveModel.findById(saveId).then(function (save) {
    save.hash = hash;
    save.save();
    return save;
  });
};

//
// Get all saves of all users
//
module.exports.getAllSave = function () {
  return SaveModel.findAll({
    order: 'saveScheduledId',
  });
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
