/*
** Statistic module routes
*/

const notificationController = require('../controllers/notification');

module.exports = function initRebootRoutes(app, conf) {
  //
  //// GET requests

  app.post('/api/logged-in/admin/notification/display', function (req, res) {
    let data = notificationController.displayNotificationByUsername(req, res);
    res.json(data);
  });
};
