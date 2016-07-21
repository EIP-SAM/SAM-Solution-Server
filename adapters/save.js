//
// Adapter Save
//
SaveModel = require('../models/save');

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
