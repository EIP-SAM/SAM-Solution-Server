/*
** Notification module routes
*/

const notificationController = require('../controllers/notification');

module.exports = function initNotificationRoutes(app) {
  app.post('/api/logged-in/admin/notification/display', (req, res) => {
    const data = notificationController.displayNotificationByUsername(req, res);
    res.json(data);
  });
};
