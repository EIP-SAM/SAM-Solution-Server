//
// Adapter Git
//
const gitWorker = require('../workers/git');

//
// Create new repo for a user
//
module.exports.initNewGitRepo = (userId, userName) => gitWorker.initNewGitRepo(userId, userName);
