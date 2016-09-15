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

  app.get('/api/logged-in/history_restore', function (req, res) {
    restoreController.historyRestoreByUser(req, res).then(function(historyRestores) {
      res.json(historyRestores)
    })
  });

  app.post('/api/logged-in/create_restore', function (req, res) {
    restoreController.createRestore(req, res).then(function(newRestore) {
      res.json('Your restoration has been created');
    });
  });
};
