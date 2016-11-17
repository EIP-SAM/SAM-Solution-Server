//
// Manager Restore
//
var restoreAdapter = require('../adapters/restore');
var saveScheduledAdapter = require('../adapters/saveScheduled');
var usersAdapter = require('../adapters/users');
var logger = require('../libs/bunyan');
var daemon = require('../websocket/daemon/restore');

//
// Get all users with their last restoration
//
module.exports.lastUsersRestores = function (req, res) {
  return restoreAdapter.lastUsersRestores();
}

//
// Get username from request
// Get all restorations of a user
//
module.exports.historyRestoreByUser = function (req, res) {
  const username = req.query.username;
  return restoreAdapter.historyRestoreByUser(username);
}

//
// Get data from resquest
// Call adapter
//
module.exports.createRestore = function (req, res) {
  const userId = req.body.userId;
  const files = req.body.files;
  const saveId = req.body.saveId;
  return usersAdapter.findById(userId).then(function (user) {
    logger.setModuleName('Restore').setUser({ id: user.id, name: user.name }).info(`${user.name} has create a restore`);
    restoreAdapter.createRestore(userId, files, saveId).then(function (restore) {
      saveScheduledAdapter.findSaveById(saveId).then(function(save) {
        daemon.exec(user.name, save.hash, function(msg) {
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
      })
    });
  });
};

//
// Update restore isStart boolean
// Call adapter
//
function startRestore(restoreId) {
  return restoreAdapter.restoreIsStart(restoreId);
};

//
// Update restore isFinish boolean
// Call adapter
//
function restoreFinish(restoreId) {
  return restoreAdapter.restoreIsFinish(restoreId);
};

//
// Call adapter
//
function restoreSuccess(restoreId) {
  return restoreAdapter.restoreIsSuccess(restoreId);
};
