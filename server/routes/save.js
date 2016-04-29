//
// Routes Save
//
//
var saveController = require('../controllers/save');

module.exports = function initSaveRoutes(app) {

  app.get('/save', function (req, res) {
    res.render('program_save_restore_test.ejs');
  });

  app.post('/create_save', function (req, res) {
    saveController.createSave(req, res);
    req.flash('msg', 'Your save has been created');
    res.redirect('/save');
  });

  app.post('/save_start', function (req, res) {
    saveController.startSave(req, res);
    req.flash('msg', 'Your save has started');
    res.redirect('/save');
  });

  app.post('/save_finish', function (req, res) {
    saveController.saveFinish(req, res);
    res.redirect('/save');
  });

  app.post('/remove_save', function (req, res) {
    saveController.removeSave(req, res);
    req.flash('msg', 'Your auto/program save has been removed');
    res.redirect('/save');
  });

  app.post('/save_success', function (req, res) {
    saveController.saveSuccess(req, res);
    req.flash('msg', 'Your save has succeeded');
    res.redirect('/save');
  });

  app.post('/save_fail', function (req, res) {
    req.flash('msg', 'Your save has failed');
    res.redirect('/save');
  });
};
