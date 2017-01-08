//
// Routes Restore
//
const restoreController = require('../controllers/restore');

module.exports = function initRestoreRoutes(app) {
  app.get('/api/logged-in/admin/restore', (req, res) => {
    restoreController.lastUsersRestores().then((restores) => {
      res.json(restores);
    });
  });

  app.get('/api/logged-in/history_restore', (req, res) => {
    restoreController.historyRestoreByUser(req, res).then((historyRestores) => {
      res.json(historyRestores);
    });
  });

  app.post('/api/logged-in/create_restore', (req, res) => {
    restoreController.createRestore(req, res).then((newRestore) => {
      res.json('Your restoration has been created');
    });
  });
};
