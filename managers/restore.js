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
// Get data from resquest
// Call adapter
//
module.exports.createRestore = (req) => {
  const userId = req.body.userId;
  const files = req.body.files;
  const saveId = req.body.saveId;
  return usersAdapter.findById(userId).then((user) => {
    logger.setModuleName('Restore').setUser({ id: user.id, name: user.name }).info(`${user.name} has create a restore`);
    restoreAdapter.createRestore(userId, files, saveId).then((restore) => {
      saveScheduledAdapter.findSaveById(saveId).then((save) => {
        daemon.exec(user.name, save.hash, (msg) => {
          if (msg.isSuccess) {
            logger.setModuleName('Restore').setUser({ id: '', name: user.name }).info(`${user.name} succeeded a restore`);
            restoreFinish(restore.id);
            restoreSuccess(restore.id);
          } else if (msg.isFinish) {
            logger.setModuleName('Restore').setUser({ id: '', name: user.name }).info(`${user.name} failed a restore. Error: ${msg.msg.cmd}`);
            restoreFinish(restore.id);
          } else if (msg.isStart) {
            startRestore(restore.id);
          }
        });
      });
    });
  });
};
