const daemonCmdAdapter = require('../../adapters/daemonCommand');
const userAdapter = require('../../adapters/users');
const logger = require('../../libs/bunyan').setModuleName('Daemon');

const notificationDaemon = require('../../websocket/daemon/notification');

module.exports.NOTIFICATION_DISPLAY = 'notification.display';

//
// Check if any persisted command are save for the user
//
module.exports.check = function check(username) {
  userAdapter.findByName(username).then((user) => {
    daemonCmdAdapter.getCommandById(user.id).then((commands) => {
      for (let i = 0; i < commands.length; ++i) {
        commandFunction[commands[i].commandName](commands[i]);
        daemonCmdAdapter.deleteById(commands[i].id);
      }
    }).catch(() => {
      logger.info(`Unable to retrieve persist notification for ${username}`);
    });
  }).catch(() => {
    logger.info(`Unable to retrieve ${username}for persisted commands`);
  });
};

let commandFunction = [];
commandFunction[module.exports.NOTIFICATION_DISPLAY] = (command) => {
  userAdapter.findById(command.userId).then((user) => {
    const data = JSON.parse(command.content);
    notificationDaemon.display(user.name, data.title, data.description);
  }).catch(() => {
    logger.info(`Unable to retrieve user ${command.userId}for persisted commands`);
  });
};
