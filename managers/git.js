//
// Manager Git
//
const gitAdapter = require('../adapters/git');

//
// Create new repo for a user
//
module.exports.initNewGitRepo = function (userId, userName) {
  return gitAdapter.initNewGitRepo(userId, userName);
};
