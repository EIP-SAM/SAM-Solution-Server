//
// Manager Save
//
var saveScheduledAdapter = require('../adapters/saveScheduled');
var cronManager = require('./cronSave');
var nodeSchedule = require('../libs/nodeSchedule');
var logger = require('../libs/bunyan');

//
// Get all users with their last save
//
module.exports.lastUsersSaves = function (req, res) {
  return saveScheduledAdapter.lastUsersSaves().then(function(results) {
    for (var user of results) {
      var lastSaveScheduled = [];
      if (user.save_scheduleds.length === 0) {
        continue;
      }
      lastSaveScheduled = user.save_scheduleds[0];
      for (var saveScheduled of user.save_scheduleds) {
        if (lastSaveScheduled.saves.length === 0) {
          lastSaveScheduled = saveScheduled;
          continue;
        }
        if (saveScheduled.saves[0] && lastSaveScheduled.saves[0].execDate < saveScheduled.saves[0].execDate) {
          lastSaveScheduled = saveScheduled;
        }
      }
      user.dataValues.save_scheduleds = (lastSaveScheduled.saves.length) ? lastSaveScheduled : [];
    }
    return results;
  });
}

//
// Get username from request
// Get all saves (savesScheduleds & saves) of a user (past & scheduled)
//
module.exports.historySavesByUser = function (req, res) {
  const username = req.query.username;
  return saveScheduledAdapter.historySavesByUser(username);
}

module.exports.createSave = function (req, res) {
  let usersId = req.body.usersId;
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

  if (typeof usersId === 'string' ) {
    usersId = usersId.split();
  }

  for (const user of usersId) {
    saveScheduledAdapter.createSaveScheduled(user, cron, files.toString()).then(
      function (saveScheduled) {
        saveScheduledAdapter.findUserBySaveScheduledId(saveScheduled.id).then(function (username) {
          logger.setModuleName('Save').setUser({ id: username[0].dataValues.id, name: username[0].dataValues.name }).info(`${username[0].dataValues.name} created a save`);
          saveScheduledAdapter.createSave(saveScheduled.id, dateFormat).then(function (save) {
            nodeSchedule.listCron[saveScheduled.id] = cronManager.createSaveScheduled(dateFormat, username[0].dataValues.name, files, save.id, saveScheduled.id);
          })
        })
      }
    )
  }
};

//
// Start save
// Call adapter
//
module.exports.startSave = function (saveId) {
  return saveScheduledAdapter.saveIsStart(saveId);
};

//
// If auto save then create new save
// Else disable saveSchedule and remove cron from list
// Call adapters
//
module.exports.saveFinish = function (saveScheduledId, saveId, username, files) {
  saveScheduledAdapter.findSaveScheduledById(saveScheduledId).then(function (saveScheduled) {
    if (saveScheduled.cron === null) {
      saveScheduledAdapter.disableSaveScheduled(saveScheduled.id);
      //cronManager.removeCron(saveScheduled.id);
    } else {
      var nextDateSave = cronManager.parserCronToDate(saveScheduled.cron);
      saveScheduledAdapter.createSave(saveScheduled.id, nextDateSave).then(function (save) {
        nodeSchedule.listCron[saveScheduled.id] = cronManager.createSaveScheduled(nextDateSave, username, files, save.id, saveScheduled.id);
      })
    }
  });
  return saveScheduledAdapter.saveIsFinish(saveId);
};

//
// Update Success boolean
// Save hash of commit
// Call adapter
//
module.exports.saveSuccess = function (saveId) {
  const hash = '#45487';
  saveScheduledAdapter.saveIsSuccess(saveId);
  //return saveAdapter.hashSave(saveId, hash);
};

//
// Get data from resquest
// Remove cron from list
// Disabled saveScheduled
// Cancel save
// Call adapter
//
module.exports.cancelSave = function (req, res) {
  const saveScheduledId = req.body.saveScheduledId;
  const saveId = req.body.saveId;
  cronManager.removeCron(saveScheduledId);
  saveScheduledAdapter.disableSaveScheduled(saveScheduledId);
  saveScheduledAdapter.cancelSave(saveId);
  saveScheduledAdapter.findUserBySaveScheduledId(saveScheduledId).then(function (user) {
    logger.setModuleName('Save').setUser({ id: user[0].dataValues.id, name: user[0].dataValues.name }).info(`${user[0].dataValues.name} canceled a scheduled save`);
  })
};
