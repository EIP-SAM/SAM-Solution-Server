//
// Routes Save
//
//
var saveController = require('../controllers/save');

module.exports = function initSaveRoutes(app) {

  app.get('/save', function (req, res) {
    saveController.lastUsersSaves().then(function(saves) {
      res.json(saves);
    })
  });

  app.get('/history_save', function (req, res) {
    saveController.historySavesByUser(req, res).then(function(historySaves) {
      res.json(historySaves);
    })
  });

  app.post('/create_save', function (req, res) {
    saveController.createSave(req, res)
    res.json('Your save has been created');
  });

  app.post('/cancel_save', function (req, res) {
    saveController.cancelSave(req, res);
    res.json('Your auto/programmed save has been canceled');
  });

  app.post('/get_history_save', function (req, res) {
    saveController.getHistorySave(req, res);
    res.redirect('/save');
  });
};
