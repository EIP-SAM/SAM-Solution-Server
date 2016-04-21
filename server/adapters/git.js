//
// Adapter Git
//
var gitWorker = require('../workers/git');

//
// Create new repo for a user
//
module.exports.initNewGitRepo = function (userId, userName) {
  return gitWorker.initNewGitRepo(userID, userName);
};
