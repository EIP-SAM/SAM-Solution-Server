//
// Manager Restore
//
const restoreAdapter = require('../adapters/restore');
const saveScheduledAdapter = require('../adapters/saveScheduled');
const usersAdapter = require('../adapters/users');
const logger = require('../libs/bunyan');
const daemon = require('../websocket/daemon/restore');

//
// Get all users with their last restoration
//
module.exports.lastUsersRestores = () => restoreAdapter.lastUsersRestores();

//
// Get username from request
// Get all restorations of a user
//
module.exports.historyRestoreByUser = (req) => {
  const username = req.query.username;
  return restoreAdapter.historyRestoreByUser(username);
};

//
// Update restore isStart boolean
// Call adapter
//
function startRestore(restoreId) {
  return restoreAdapter.restoreIsStart(restoreId);
}

//
// Update restore isFinish boolean
// Call adapter
//
function restoreFinish(restoreId) {
  return restoreAdapter.restoreIsFinish(restoreId);
}

//
// Call adapter
//
function restoreSuccess(restoreId) {
  return restoreAdapter.restoreIsSuccess(restoreId);
}

//
// Callback called after launch of restore by the daemon
//
module.exports.callBackRestoreExecDaemon = (username, restoreId) => (msg) => {
  if (msg.isSuccess) {
    logger.setModuleName('Restore').setUser({ id: '', name: username }).info(`${username} succeeded a restore`);
    restoreFinish(restoreId);
    restoreSuccess(restoreId);
  } else if (msg.isFinish) {
    logger.setModuleName('Restore').setUser({ id: '', name: username }).warn(`${username} failed a restore. Error: ${msg.msg.err}`);
    restoreFinish(restoreId);
  } else if (msg.isStart) {
    startRestore(restoreId);
  } else {
    logger.setModuleName('Restore').setUser({ id: '', name: username }).error(`${msg.msg.err}`);
  }
};

//
// Get data from resquest
// Call adapter
// Call daemon
//
module.exports.createRestore = (req) => {
  const userId = req.body.userId;
  const files = req.body.files;
  const saveId = req.body.saveId;
  return usersAdapter.findById(userId).then((user) => {
    logger.setModuleName('Restore').setUser({ id: user.id, name: user.name }).info(`${user.name} has create a restore`);
    restoreAdapter.createRestore(userId, files, saveId).then((restore) => {
      saveScheduledAdapter.findSaveById(saveId).then((save) => {
        daemon.exec(user.name, save.hash, restore.id, module.exports.callBackRestoreExecDaemon(user.name, restore.id));
      });
    });
  });
};
