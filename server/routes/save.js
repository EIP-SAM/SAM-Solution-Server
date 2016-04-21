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
  });

  app.post('/save_is_start', function (req, res) {
    saveController.startSave(req, res);
  });

  app.post('/remove_save', function (req, res) {
    saveController.removeSave(req, res);
  });
};
