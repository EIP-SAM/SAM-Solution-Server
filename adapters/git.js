//
// Adapter Git
//
const gitWorker = require('../workers/git');

//
// Create new repo for a user
//
module.exports.initNewGitRepo = function (userId, userName) {
  return gitWorker.initNewGitRepo(userId, userName);
};
