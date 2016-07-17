//
// Cron manager for save module using nodeSchedule
//
var nodeSchedule = require('../libs/nodeSchedule');
var cronParser = require('cron-parser');
var saveScheduledAdapter = require('../adapters/saveScheduled');
var saveAdapter = require('../adapters/save');

//
// Call when server is restart
// Create all the cron and add them to listCron;
//
module.exports.initAllSaveCron = function () {
  saveScheduledAdapter.getAllSaveScheduleActive().then(function (savesScheduled) {
    var saveScheduledIds = [];
    for (var ss of savesScheduled) {
      saveScheduledIds.push(ss.id);
    }

    saveAdapter.getAllSaveBySaveSchedule(saveScheduledIds).then(function (saves) {
      for (var ss of savesScheduled) {
        if (ss.cron === null) {
          for (var s of saves) {
            if (ss.id == s.saveScheduledId) {
              nodeSchedule.listCron[ss.id] = module.exports.createSaveScheduled(s.execDate);
            }
          }
        } else {
          nodeSchedule.listCron[ss.id] = module.exports.createAutoSave(ss.cron, ss.id);
        }
      }
    });
  });
};

//
// Create cron with cron notation
// Function is call when the cron is triggered
//
module.exports.createAutoSave = function (cronNotation) {
  return nodeSchedule.scheduleJob(cronNotation, function () {
    console.log('Send request to client');
  });
};

//
// Create cron with a specific date
// Function is call when the cron is triggered
//
module.exports.createSaveScheduled = function (date) {
  return nodeSchedule.scheduleJob(date, function () {
    console.log('Send request to client');
  });
};

//
// Stop cron
// Remove cron from list
//
module.exports.removeCron = function (key) {
  nodeSchedule.listCron[key].cancel();
  delete nodeSchedule.listCron[key];
};

//
// Parse cron expression to have a date
// Use cron-parser lib
//
module.exports.parserCronToDate = function (cron) {
  return cronParser.parseExpression(cron).next().toString();
};

//
// Parse date & frequency to have a cron expression
// Day of week => cron: Sun = 1, Date: Sun = 0
//
module.exports.parseDateFrequencyToCron = function (date, frequency) {
  let cron;
  switch (frequency) {
    case 'Daily':
      cron = date.getMinutes() + ' ' + date.getHours() + ' 1/1 * ? *';
      break;
    case 'Weekly':
      cron = date.getMinutes() + ' ' + date.getHours() + ' ? * ' + (date.getDay() + 1) + ' *';
      break;
    case 'Monthly':
      cron = date.getMinutes() + ' ' + date.getHours() + ' ' + date.getDate() + ' 1/1 ? *';
      break;
    default:
      cron = null;
  }
  return cron;
}
