//
// Unit test for cronSave manager
//
var cronParser = require('cron-parser');
var cronSaveManager = require('../../managers/cronSave');
var saveScheduledAdapter = require('../../adapters/saveScheduled');
var nodeSchedule = require('../../libs/nodeSchedule');

describe('initAllSaveCron', function () {
  it('should have called getAllSaveScheduleActive once', function () {
    spyOn(saveScheduledAdapter, 'getAllSaveScheduleActive').and.returnValue(
          new Promise(function (resolve, reject) {
      resolve(SaveScheduledModel);
    }));

    cronSaveManager.initAllSaveCron();
    expect(saveScheduledAdapter.getAllSaveScheduleActive).toHaveBeenCalledTimes(1);
  });
});

describe('createSaveScheduled', function () {
  it('should have called scheduleJob once', function() {
    spyOn(nodeSchedule, 'scheduleJob');
    cronSaveManager.createSaveScheduled(new Date());
    expect(nodeSchedule.scheduleJob).toHaveBeenCalledTimes(1);
  });
});
