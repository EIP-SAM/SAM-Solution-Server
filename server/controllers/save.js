//
// Controller Save
//
var saveManager = require('../managers/save');

//
// Get data from form
// Format date
// Launch save
//
module.exports.createSave = function (req, res) {
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

  saveManager.createSave(userId, date, cron, files);
  res.redirect('/restore');
};

//
// Call when a save is start
// Redirect to save view
//
module.exports.startSave = function (req, res) {
    const saveId = req.body.saveId;
    saveManager.startSave(saveId);
    res.redirect('/save');
  };

//
// Call when a save is finish
// Redirect to save view
//
module.exports.saveFinish = function (req, res) {
    const saveId = req.body.saveId;
    saveManager.saveFinish(saveId);
    res.redirect('/save');
  };

//
// Call when a save has succeeded
// Redirect to save view
//
module.exports.saveSuccess = function (req, res) {
    const saveId = req.body.saveId;
    req.flash('msg', 'Your save has succeeded');
    saveManager.saveSuccess(saveId);
    res.redirect('/save');
  };

//
// Call when a save has failed
// Redirect to save view
//
module.exports.saveFail = function (req, res) {
    req.flash('msg', 'Your save has failed');
    res.redirect('/save');
  };

module.exports.removeSave = function (req, res) {
    req.flash('msg', 'Your auto/program save has been removed');
    saveManager.removeSave(saveScheduleId);
    res.redirect('/save');
  };
