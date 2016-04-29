//
// Manager Save
//
var saveAdapter = require('../adapters/save');
var saveScheduleAdapter = require('../adapters/saveSchedule');
var nodeSchedule = require('../libs/nodeSchedule');

module.exports.createSave = function (req, res) {
  // Get data from form
  // Format date
  // Launch save
  const userId = req.body.userId;

  // Cron management
  const repeatFrequenceSave = req.body.repeatFrequenceSave;
  var cron = req.body.cron; // to modify -> will need a parser
  if (repeatFrequenceSave == 'no') {
    cron = null;
  }

  const files = req.body.files; // will probably need a parser

  // Exec Date management
  var dateProgSave = req.body.dateProgSave;
  var timeProgSave = req.body.timeProgSave;
  dateProgSave = dateProgSave.split('-');
  timeProgSave = timeProgSave.split(':');

  // In JavaScript - 0 - January, 11 - December
  const date = new Date(dateProgSave[0], dateProgSave[1] - 1, dateProgSave[2],
    timeProgSave[0], timeProgSave[1]);

  return saveScheduleAdapter.createSaveScheduled(userId, cron, files).then(
    function (saveSchedule) {
      if (cron === null) {
        nodeSchedule.listCron[saveSchedule.id] = nodeSchedule.createSaveScheduled(date);
      } else {
        nodeSchedule.listCron[saveSchedule.id] = nodeSchedule.createCron(cron);
      }

      console.log(nodeSchedule.listCron);
      saveAdapter.createSave(saveSchedule.id, date);
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
  const hash = '#45487';
  saveAdapter.saveIsSuccess(saveId);
  return saveAdapter.hashSave(saveId, hash).then(function (save) {
    nodeSchedule.removeSaveSchedule(save.saveScheduleId);
  });
};

//
// Get data from resquest
// Call adapter
//
module.exports.removeSave = function (req, res) {
  const saveId = req.body.saveId;
};
