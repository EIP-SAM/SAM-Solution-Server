/*
** Statistic module routes
*/

const rebootController = require('../controllers/reboot');

module.exports = function initRebootRoutes(app, conf) {
  //
  //// GET requests

  app.get('/api/logged-in/admin/reboot', function (req, res) {
    let data = rebootController.execRebootByUsername(req, res);
    res.json(data);
  });
};
