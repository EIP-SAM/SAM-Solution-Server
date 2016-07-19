//
// Routes Save
//
//
var saveController = require('../controllers/save');

module.exports = function initSaveRoutes(app) {

  app.get('/api/logged-in/admin/save', function (req, res) {
    saveController.lastUsersSaves().then(function(saves) {
      res.json(saves);
    })
  });

  app.get('/api/logged-in/history_save', function (req, res) {
    saveController.historySavesByUser(req, res).then(function(historySaves) {
      res.json(historySaves);
    })
  });

  app.post('/api/logged-in/create_save', function (req, res) {
    saveController.createSave(req, res)
    res.json('Your save has been created');
  });

  app.post('/api/logged-in/cancel_save', function (req, res) {
    saveController.cancelSave(req, res);
    res.json('Your auto/programmed save has been canceled');
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

  app.post('/save_success', function (req, res) {
    saveController.saveSuccess(req, res);
    req.flash('msg', 'Your save has succeeded');
    res.redirect('/save');
  });

  app.post('/save_fail', function (req, res) {
    req.flash('msg', 'Your save has failed');
    res.redirect('/save');
  });

  app.post('/get_history_save', function (req, res) {
    saveController.getHistorySave(req, res);
    res.redirect('/save');
  });
};
