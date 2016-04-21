
var cron = require('node-schedule');
cron.listCron = {};

cron.createCron = function (cron) {
  return libs.cron.scheduleJob(cron, function () {
    console.log('Cron created');
  });
};

cron.createSaveSchedule = function (date) {
  return libs.cron.scheduleJob(date, function () {
    console.log('Save scheduled');
  });
};

cron.removeSaveSchedule = function (key) {
  libs.cron.listCron[key].cancel();
  delete libs.cron.listCron[key];
};

module.exports = cron;
