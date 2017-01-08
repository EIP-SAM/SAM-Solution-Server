const logger = require('../libs/bunyan').setModuleName('Notification');

const daemonNotification = require('../websocket/daemon/notification');

module.exports.displayNotificationByUsername = (req) => {
  let username = req.body.username;
  const title = req.body.title;
  const description = req.body.description;

  if (!username || !title || !description) {
    return { isSuccess: false, err: 'Missing POST parameter', obj: req.body };
  }

  if (!Array.isArray(username)) {
    username = [username];
  }

  for (let i = 0; i < username.length; ++i) {
    logger.info(`Notification display asked for ${username[i]}`);
    daemonNotification.display(username[i], title, description, () => {
      logger.info(`Notification displayed for ${username[i]}`);
    });
  }

  return { isSuccess: true, err: '' };
};
