const logger = require('../libs/bunyan').setModuleName('Reboot');

const daemonReboot = require('../websocket/daemon/reboot');

module.exports.execRebootByUsername = (req) => {
  const username = req.query.username;
  logger.info(`Reboot asked for ${username}`);
  return daemonReboot.exec(username, () => {
    logger.info(`Reboot started for ${username}`);
  });
};
