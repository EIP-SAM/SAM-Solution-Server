//
// Unit test for cronSave manager
//
var cronSaveManager = require('../../managers/cronSave');
var saveScheduledAdapter = require('../../adapters/saveScheduled');

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
