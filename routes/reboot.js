/*
** Statistic module routes
*/

const rebootController = require('../controllers/reboot');

module.exports = function initRebootRoutes(app) {
  //
  // GET requests
  //
  app.get('/api/logged-in/admin/reboot', (req, res) => {
    const data = rebootController.execRebootByUsername(req, res);
    res.json(data);
  });
};
