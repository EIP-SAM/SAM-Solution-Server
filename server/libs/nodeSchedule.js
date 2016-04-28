
var cron = require('node-schedule');
cron.listCron = {};

cron.createCron = function (cronNotation) {
  return cron.scheduleJob(cronNotation, function () {
    console.log('Cron created');
  });
};

cron.createSaveSchedule = function (date) {
  return cron.scheduleJob(date, function () {
    console.log('Save scheduled');
  });
};

cron.removeSaveSchedule = function (key) {
  cron.listCron[key].cancel();
  delete cron.listCron[key];
};

module.exports = cron;
