//
// Routes Save
//
//
const saveController = require('../controllers/save');

module.exports = function initSaveRoutes(app) {
  app.get('/api/logged-in/admin/save', (req, res) => {
    saveController.lastUsersSaves().then((saves) => {
      res.json(saves);
    });
  });

  app.get('/api/logged-in/history_save', (req, res) => {
    saveController.historySavesByUser(req, res).then((historySaves) => {
      res.json(historySaves);
    });
  });

  app.get('/api/logged-in/history_succeeded_save', (req, res) => {
    saveController.historySucceededSavesByUser(req, res).then((saves) => {
      res.json(saves);
    });
  });

  app.post('/api/logged-in/create_save', (req, res) => {
    saveController.createSave(req, res);
    res.json('Your save has been created');
  });

  app.post('/api/logged-in/cancel_save', (req, res) => {
    saveController.cancelSave(req, res);
    res.json('Your auto/programmed save has been canceled');
  });
};
