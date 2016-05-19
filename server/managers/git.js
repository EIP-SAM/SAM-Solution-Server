//
// Manager Git
//
var gitAdapter = require('../adapters/git');

//
// Create new repo for a user
//
module.exports.initNewGitRepo = function (userId, userName) {
  return gitAdapter.initNewGitRepo(userId, userName);
};

//
// Get last commit for a given repo
//
module.exports.getLastCommitInfo = function (userId, userName) {
  return gitAdapter.getLastCommitInfo(userId, userName);
};
