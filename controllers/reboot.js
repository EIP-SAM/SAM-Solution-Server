const rebootManager = require('../managers/reboot');

module.exports.execRebootByUsername = function (req, res) {
  return rebootManager.execRebootByUsername();
}
