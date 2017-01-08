//
// Manager Git
//
const gitAdapter = require('../adapters/git');

//
// Create new repo for a user
//
module.exports.initNewGitRepo = (userId, userName) => gitAdapter.initNewGitRepo(userId, userName);
