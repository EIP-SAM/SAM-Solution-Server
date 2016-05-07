//
// Cron manager using nodeSchedule
//
var nodeSchedule = require('../libs/nodeSchedule');
var cronParser = require('cron-parser');

//module.exports.listSaveCron = {};

//
// Create cron with cron notation
// Function is call when the cron is triggered
//
module.exports.createAutoSave = function (cronNotation, saveScheduledId) {
  return nodeSchedule.scheduleJob(cronNotation, function (saveScheduledId) {
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
