//
// Manager Git
//
var gitAdapter = require('../adapters/git');

module.exports.initNewGitRepo = function (userId, userName) {
  return gitAdapter.initNewGitRepo(userId, userName);
};
