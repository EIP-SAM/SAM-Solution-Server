//
// Routes Restore
//
module.exports = function initRestoreRoutes(app, ensureLoggedIn,
  ensureLoggedOut, controllers) {

  app.get('/restore', function(req, res) {
    res.render('program_save_restore_test.ejs');
  });

  app.post('/launch_restore', function(req, res) {
    controllers.launchRestore(req, res);
  });

  app.post('/restore_is_start', function(req, res) {
    controllers.startRestore(req, res);
  });

};
