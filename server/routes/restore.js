//
// Routes Restore
//
module.exports = function initRestoreRoutes(app, ensureLoggedIn,
  ensureLoggedOut, controllers) {

  app.get('/restore', function (req, res) {
    res.render('program_save_restore_test.ejs');
  });

  app.post('/create_restore', function (req, res) {
    controllers.createRestore(req, res);
    req.flash('msg', 'Your restoration has been created');
    res.redirect('/restore');
  });

  app.post('/restore_start', function (req, res) {
    controllers.startRestore(req, res);
    req.flash('msg', 'Your restoration has started');
    res.redirect('/restore');
  });

  app.post('/restore_finish', function (req, res) {
    controllers.restoreFinish(req, res);
    res.redirect('/restore');
  });

  app.post('/restore_success', function (req, res) {
    controllers.restoreSuccess(req, res);
    req.flash('msg', 'Your restoration has succeeded');
    res.redirect('/restore');
  });

  app.post('/restore_fail', function (req, res) {
    req.flash('msg', 'Your restoration has failed');
    res.redirect('/restore');
  });
};
