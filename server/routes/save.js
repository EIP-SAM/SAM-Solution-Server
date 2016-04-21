//
// Routes Save
//
module.exports = function initSaveRoutes(app, ensureLoggedIn,
  ensureLoggedOut, controllers) {

  app.get('/save', function (req, res) {
    res.render('program_save_restore_test.ejs');
  });

  app.post('/create_save', function (req, res) {
    controllers.createSave(req, res);
  });

  app.post('/save_is_start', function (req, res) {
    controllers.startSave(req, res);
  });

  app.post('/remove_save', function (req, res) {
    controllers.removeSave(req, res);
  });
};
