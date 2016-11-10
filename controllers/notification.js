const notificationManager = require('../managers/notification');

module.exports.displayNotificationByUsername = function (req, res) {
  return notificationManager.displayNotificationByUsername(req, res);
}
