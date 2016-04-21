//
// Adapter Save
//
//
// Create new save instance
//
SaveModel = require('../models/save');

module.exports.createSave = function (saveSchedule, date) {
  SaveModel.create({
    saveScheduleId: saveSchedule,
    execDate: date,
  });
};

//
// Search in the database a save instance with id = saveId
// Update boolean isStart
//
module.exports.saveIsStart = function (saveId) {
  SaveModel.findById(saveId).then(function (save) {
    save.isStart = true;
    save.save();
  });
};

//
// Search in the database a save instance with id = saveId
// Update boolean isFinish
//
module.exports.saveIsFinish = function (saveId) {
  SaveModel.findById(saveId).then(function (save) {
    save.isFinish = true;
    save.save();
  });
};

//
// Search in the database a save instance with id = saveId
// Update boolean isSuccess
//
module.exports.saveIsSuccess = function (saveId) {
  SaveModel.findById(saveId).then(function (save) {
    save.isSuccess = true;
    save.save();
  });
};

//
// Search in the database a save instance with id = saveId
// Save the hash of the commit
//
module.exports.hashSave = function (hash) {
  return SaveModel.findById(saveId).then(function (save) {
    save.hash = true;
    save.save();
  });
};
