//
// Routes Restore
//
var restoreController = require('../controllers/restore');

module.exports = function initRestoreRoutes(app) {

  app.get('/api/logged-in/admin/restore', function (req, res) {
    restoreController.lastUsersRestores().then(function(restores) {
      res.json(restores);
    })
  });

  app.get('/api/logged-in/historyRestore', function (req, res) {
    restoreController.historyRestoreByUser(req, res).then(function(historyRestores) {
      res.json(historyRestores)
    })
  });

  app.post('/api/logged-in/createRestore', function (req, res) {
    restoreController.createRestore(req, res).then(function(newRestore) {
      res.json('Your restoration has been created');
    });
  });

  app.post('/restore_start', function (req, res) {
    restoreController.startRestore(req, res);
    req.flash('msg', 'Your restoration has started');
    res.redirect('/restore');
  });

  app.post('/restore_finish', function (req, res) {
    restoreController.restoreFinish(req, res);
    res.redirect('/restore');
  });

  app.post('/restore_success', function (req, res) {
    restoreController.restoreSuccess(req, res);
    req.flash('msg', 'Your restoration has succeeded');
    res.redirect('/restore');
  });

  app.post('/restore_fail', function (req, res) {
    req.flash('msg', 'Your restoration has failed');
    res.redirect('/restore');
  });

  app.post('/get_history_restore', function (req, res) {
    restoreController.getHistoryRestore(req, res);
    res.redirect('/restore');
  });
};
