const rebootManager = require('../managers/reboot');

module.exports.execRebootByUsername = (req, res) => rebootManager.execRebootByUsername(req, res);
