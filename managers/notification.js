const logger = require('../libs/bunyan').setModuleName('Notification');

const groupAdapter = require('../adapters/groups');

const daemonNotification = require('../websocket/daemon/notification');

function displayNotification(usernames, title, description, persistence) {
  for (let i = 0; i < usernames.length; ++i) {
    if (usernames[i].name !== undefined) {
      usernames[i] = usernames[i].name;
    }

    logger.info(`Notification display asked for ${usernames[i]}`);
    daemonNotification.display(usernames[i], title, description, persistence, () => {
      logger.info(`Notification displayed for ${usernames[i]}`);
    });
  }
}

module.exports.displayNotificationByUsername = (req) => {
  const username = req.body.username;
  const title = req.body.title;
  const description = req.body.description;
  const persistence = req.body.persistence;
  const isGroup = req.body.isGroup;

  if (!username || !title || !description) {
    return { isSuccess: false, err: 'Missing POST parameter', obj: req.body };
  }

  let usernameArray = username;
  if (!Array.isArray(username)) {
    usernameArray = [username];
  }

  if (isGroup && isGroup === 'true') {
    for (let i = 0; i < usernameArray.length; ++i) {
      groupAdapter.findAllAssociatedWithUsers().then((groups) => {
        for (let j = 0; j < groups.length; ++j) {
          if (usernameArray[j] === groups[j].name) {
            displayNotification(groups[j].users, title, description, persistence);
          }
        }
      });
    }
  } else {
    displayNotification(usernameArray, title, description, persistence);
  }

  return { isSuccess: true, err: '' };
};
