//
// Manager Save
//
var saveAdapter = require('../adapters/save');

module.exports.createSave = function (req, res) {
  // Get data from form
  // Format date
  // Launch save
  const userId = req.body.userId;
  var dateProgSave = req.body.dateProgSave;
  var timeProgSave = req.body.timeProgSave;
  const repeatSave = req.body.repeatSave;
  const repeatFrequenceSave = req.body.repeatFrequenceSave;
  const files = req.body.files;

  dateProgSave = dateProgSave.split('-');
  timeProgSave = timeProgSave.split(':');

  const date = new Date(dateProgSave[0], dateProgSave[1], dateProgSave[2],
    timeProgSave[0], timeProgSave[1]);

  var cron = req.body.cron; // to modify
  if (repeatSave == 'no') {
    cron = null;
  }

  return saveAdapter.createSaveSchedule(userId, cron, files).then(
    function (saveSchedule) {
      if (cron === null) {
        libs.cron.listCron[saveSchedule.id] = libs.cron.createSaveSchedule(cron);
      } else {
        libs.cron.listCron[saveSchedule.id] = libs.cron.createCron(date);
      }

      adapters.createSave(saveSchedule.id, date);
    });
};

//
// Get data from resquest
// Call adapter
//
module.exports.startSave = function (req, res) {
  const saveId = req.body.saveId;
  return saveAdapter.saveIsStart(saveId);
};

//
// Get data from resquest
// Call adapter
//
module.exports.saveFinish = function (req, res) {
  const saveId = req.body.saveId;
  return saveAdapter.saveIsFinish(saveId);
};

//
// Get data from resquest
// Update Success boolean
// Save hash of commit
// Call adapter
//
module.exports.saveSuccess = function (req, res) {
  const saveId = req.body.saveId;
  saveAdapter.saveIsSuccess(saveId);
  return saveAdapter.hashSave(hash).then(function (save) {
      libs.cron.removeSaveSchedule(save.saveScheduleId);
    });
};

//
// Get data from resquest
// Call adapter
//
module.exports.removeSave = function (req, res) {
  const saveId = req.body.saveId;
};
