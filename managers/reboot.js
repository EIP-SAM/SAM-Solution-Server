const logger = require('../libs/bunyan').setModuleName('Reboot');

const daemonReboot = require('../daemon/reboot');

module.exports.execRebootByUsername = function (req, res) {
  const username = req.query.username;
  logger.info('Reboot asked for ' + username);
  return daemonReboot.exec(username, function() {
    logger.info('Reboot started for ' + username);
  });
}
