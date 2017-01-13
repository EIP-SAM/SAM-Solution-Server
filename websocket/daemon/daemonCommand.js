const daemonCmdAdapter = require('../../adapters/daemonCommand');
const userAdapter = require('../../adapters/users');
const saveManager = require('../../managers/save');
const restoreManager = require('../../managers/restore');
const logger = require('../../libs/bunyan').setModuleName('Daemon');

const notificationDaemon = require('../../websocket/daemon/notification');
const saveDaemon = require('../../websocket/daemon/save');
const restoreDaemon = require('../../websocket/daemon/restore');

module.exports.NOTIFICATION_DISPLAY = 'notification.display';
module.exports.SAVE_EXEC = 'save.exec';
module.exports.RESTORE_EXEC = 'restore.exec';

const commandFunction = [];
commandFunction[module.exports.NOTIFICATION_DISPLAY] = (command) => {
  userAdapter.findById(command.userId).then((user) => {
    const data = JSON.parse(command.content);
    notificationDaemon.display(user.name, data.title, data.description);
    logger.info(`Persisted notification for ${command.userId} executed`);
  }).catch(() => {
    logger.error(`Unable to retrieve user ${command.userId}for persisted commands`);
  });
};

commandFunction[module.exports.SAVE_EXEC] = (command) => {
  userAdapter.findById(command.userId).then((user) => {
    const data = JSON.parse(command.content);
    saveDaemon.exec(user.name, data.files, data.saveScheduledId, data.saveId, saveManager.callBackSaveExecDaemon(user.name, data.files, data.saveScheduledId, data.saveId));
    logger.info(`Persisted save for ${command.userId} executed`);
  }).catch(() => {
    logger.error(`Unable to retrieve user ${command.userId}for persisted commands`);
  });
};

commandFunction[module.exports.RESTORE_EXEC] = (command) => {
  userAdapter.findById(command.userId).then((user) => {
    const data = JSON.parse(command.content);
    restoreDaemon.exec(user.name, data.branch, data.restoreId, restoreManager.callBackRestoreExecDaemon(user.name, data.restoreId));
    logger.info(`Persisted restore for ${command.userId} executed`);
  }).catch(() => {
    logger.error(`Unable to retrieve user ${command.userId}for persisted commands`);
  });
};


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
