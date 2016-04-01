//
// Controller Save
//
module.exports = function initSaveController(managers, controllers, libs) {

  //
  // Get data from form
  // Format date
  // Launch save
  //
  controllers.launchSave = function(req, res) {
    const userId = req.body.userId;
    var dateProgSave = req.body.dateProgSave;
    var timeProgSave = req.body.timeProgSave;
    const repeatSave = req.body.repeatSave;
    const repeatFrequenceSave = req.body.repeatFrequenceSave;
    const files = req.body.files;

    dateProgSave = dateProgSave.split('-');
    timeProgSave = timeProgSave.split(':');
    const date = new Date(dateProgSave[0], dateProgSave[1], dateProgSave[2],
      timeProgSave[0], timeProgSave[1]);

    var cron = req.body.cron; // to modify
    if (repeatSave == 'no') {
      cron = null;
    }

    managers.launchSave(userId, date, cron, files);

    res.redirect('/restore');
  };

  controllers.startSave = function(req, res) {
    const saveId = req.body.saveId;
    managers.saveSuccess(saveId);
    res.redirect('/save');
  };

  controllers.saveFinish = function(req, res) {
    const saveId = req.body.saveId;
    managers.saveSuccess(saveId);
    res.redirect('/save');
  };

  controllers.saveSuccess = function(req, res) {
    const saveId = req.body.saveId;
    managers.saveSuccess(saveId);
    res.redirect('/save');
  };

  controllers.restoreFail = function(req, res) {

  };
};
