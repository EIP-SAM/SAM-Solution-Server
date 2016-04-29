//
// Adapter Save
//
SaveModel = require('../models/save');

//
// Create new save instance
//
module.exports.createSave = function (saveSchedule, date) {
  return SaveModel.create({
    saveScheduleId: saveSchedule,
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
// Update boolean isFinish
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
