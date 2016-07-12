//
// Manager Save
//
var saveAdapter = require('../adapters/save');
var saveScheduledAdapter = require('../adapters/saveScheduled');
var cronManager = require('./cronSave');
var nodeSchedule = require('../libs/nodeSchedule');

//
// Get all users with their last save
//
module.exports.lastUsersSaves = function (req, res) {
  return saveScheduledAdapter.lastUsersSaves().then(function(results) {
    for (var user of results) {
      var lastSaveScheduled = user.save_scheduleds[0];
      for (var saveScheduled of user.save_scheduleds) {
        if (saveScheduled.saves[0] && lastSaveScheduled.saves[0].execDate < saveScheduled.saves[0].execDate) {
          lastSaveScheduled = saveScheduled;
        }
      }
      user.dataValues.save_scheduleds = lastSaveScheduled;
    }
    return results;
  });
}

//
// Get username from request
// Get all saves (savesScheduleds & saves) of a user (past & scheduled)
//
module.exports.historySavesByUser = function (req, res) {
  const username = req.get('username');
  return saveScheduledAdapter.historySavesByUser(username);
}

module.exports.createSave = function (req, res) {
  const users = req.body.users;
  const date = req.body.date;
  const time = req.body.time;
  const frequency = req.body.frequency;
  const files = req.body.files;

  const splitDate = date.split('/');
  const splitTime = time.split(':');
  // In JavaScript - 0 - January, 11 - December
  // YYYY-MM-DD hh:mm
  let dateFormat = new Date(splitDate[2], splitDate[1] - 1, splitDate[0],
    splitTime[0], splitTime[1]);
  if (dateFormat < new Date()) {
    dateFormat = new Date(new Date().getTime() + 60000);
  }

  var cron = null;
  if (frequency !== 'No Repeat') {
    cron = cronManager.parseDateFrequencyToCron(dateFormat, frequency);
  }
  saveScheduledAdapter.createSaveScheduled(users, cron, files.toString()).then(
    function (saveScheduled) {
      if (cron === null) {
        nodeSchedule.listCron[saveScheduled.id] = cronManager.createSaveScheduled(dateFormat);
      } else {
        nodeSchedule.listCron[saveScheduled.id] = cronManager.createAutoSave(cron);
      }
      saveScheduledAdapter.createSave(saveScheduled.id, dateFormat);
    }
  )
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

//
// Display save order by saveSchedule
//
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
