//
// Manager Save
//
module.exports = function initSaveManagers(adapters, managers, libs) {

  managers.createSave = function (userId, date, cron, files) {
    adapters.createSaveSchedule(userId, cron, files).then(
      function (saveSchedule) {
        if (cron === null) {
          libs.cron.listCron[saveSchedule.id] = libs.cron.createSaveSchedule(cron);
        } else {
          libs.cron.listCron[saveSchedule.id] = libs.cron.createCron(date);
        }

        adapters.createSave(saveSchedule.id, date);
      });
  };

  managers.startSave = function (saveId) {
    adapters.saveIsStart(saveId);
  };

  managers.saveFinish = function (saveId) {
    adapters.saveIsFinish(saveId);
  };

  managers.saveSuccess = function (saveId, hash) {
    adapters.saveIsSuccess(saveId);
    adapters.hashSave(hash).then(function (save) {
      libs.cron.removeSaveSchedule(save.saveScheduleId);
    });
  };

  managers.removeSave = function (saveScheduleId) {
  };
};
