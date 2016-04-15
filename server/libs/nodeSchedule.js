module.exports = function initNodeSchedule(libs) {
  libs.cron = require('node-schedule');
  libs.cron.listCron = {};

  libs.cron.createCron = function (cron) {
    return libs.cron.scheduleJob(cron, function () {
      console.log('Cron created');
    });
  };

  libs.cron.createSaveSchedule = function (date) {
    return libs.cron.scheduleJob(date, function () {
      console.log('Save scheduled');
    });
  };

  libs.cron.removeSaveSchedule = function (key) {
    libs.cron.listCron[key].cancel();
    delete libs.cron.listCron[key];
  };
};
