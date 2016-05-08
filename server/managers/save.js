//
// Manager Save
//
var saveAdapter = require('../adapters/save');
var saveScheduledAdapter = require('../adapters/saveScheduled');
var cronManager = require('./cronSave');
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

  return saveScheduledAdapter.createSaveScheduled(userId, cron, files).then(
    function (saveScheduled) {
      if (cron === null) {
        nodeSchedule.listCron[saveScheduled.id] = cronManager.createSaveScheduled(date);
      } else {
        nodeSchedule.listCron[saveScheduled.id] = cronManager.createAutoSave(cron);
      }

      saveAdapter.createSave(saveScheduled.id, date);
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
// If auto save then create new save
// Else disable saveSchedule and remove cron from list
// Call adapters
//
module.exports.saveFinish = function (req, res) {
  const saveId = req.body.saveId;
  const saveScheduledId = req.body.saveScheduledId;
  saveScheduledAdapter.findSaveScheduledById(saveScheduledId).then(function (saveScheduled) {
    if (saveScheduled.cron === null) {
      saveScheduledAdapter.disableSaveScheduled(saveScheduled.id);
      cronManager.removeCron(saveScheduled.id);
    } else {
      var nextSave = new Date(cronManager.parserCronToDate(saveScheduled.cron));
      saveAdapter.createSave(saveScheduled.id, nextSave);
    }
  });

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
  return saveAdapter.hashSave(saveId, hash);
};

//
// Get data from resquest
// Remove cron from list
// Call adapter
//
module.exports.cancelSave = function (req, res) {
  const saveScheduledId = req.body.saveScheduledId;
  cronManager.removeCron(saveScheduledId);
  return saveScheduledAdapter.disableSaveScheduled(saveScheduledId);
};

function displayHistory(savesScheduled, saves) {
  for (var ss of savesScheduled) {
    console.log('---------' + ss.id + '---------');
    console.log(ss.userId);
    for (var s of saves) {
      if (ss.id == s.saveScheduledId) {
        console.log(s.id + '     ' + s.execDate + '      ' + ss.cron);
      }
    }

    console.log('---------' + ss.id + '---------');
  }

  return savesScheduled;
}

//
// Get data from request
// Check to get:
//   - all saves of all user
//   - all saves of one/several users
// Call adapter
//
module.exports.getHistorySave = function (req, res) {
  const userId = []; // init with req.body

  if (userId.length === 0)
    return saveScheduledAdapter.getAllSaveScheduled().then(function (savesScheduled) {
      return saveAdapter.getAllSave().then(function (saves) {
        return displayHistory(savesScheduled, saves);
      });
    });

  return saveScheduledAdapter.getAllSaveScheduledByUser(userId).then(function (savesScheduled) {
    var saveScheduledIds = [];
    for (var ss of savesScheduled) {
      saveScheduledIds.push(ss.id);
    }

    return saveAdapter.getAllSaveBySaveSchedule(saveScheduledIds).then(function (saves) {
      return displayHistory(savesScheduled, saves);
    });
  });
};
