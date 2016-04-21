//
// Manager Save
//
var saveAdapter = require('../adapters/save');

module.exports.createSave = function (userId, date, cron, files) {
  saveAdapter.createSaveSchedule(userId, cron, files).then(
    function (saveSchedule) {
      if (cron === null) {
        libs.cron.listCron[saveSchedule.id] = libs.cron.createSaveSchedule(cron);
      } else {
        libs.cron.listCron[saveSchedule.id] = libs.cron.createCron(date);
      }

      adapters.createSave(saveSchedule.id, date);
    });
};

module.exports.startSave = function (saveId) {
    saveAdapter.saveIsStart(saveId);
  };

module.exports.saveFinish = function (saveId) {
    saveAdapter.saveIsFinish(saveId);
  };

module.exports.saveSuccess = function (saveId, hash) {
    saveAdapter.saveIsSuccess(saveId);
    saveAdapter.hashSave(hash).then(function (save) {
      libs.cron.removeSaveSchedule(save.saveScheduleId);
    });
  };

module.exports.removeSave = function (saveScheduleId) {
  };
