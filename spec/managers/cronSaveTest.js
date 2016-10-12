//
// Unit test for cronSave manager
//

var cronSaveManager = require('../../managers/cronSave');
var nodeSchedule = require('../../libs/nodeSchedule');

describe('createSaveScheduled', function () {
  it('should have called scheduleJob once', function() {
    spyOn(nodeSchedule, 'scheduleJob');
    cronSaveManager.createSaveScheduled(new Date());
    expect(nodeSchedule.scheduleJob).toHaveBeenCalledTimes(1);
  });
});
