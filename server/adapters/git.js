//
// Adapter Git
//
module.exports = function initGitAdapters(workers, adapters) {

  //
  // Create new repo for a user
  //
  adapters.initNewGitRepo = function (userId, userName) {
    return workers.initNewGitRepo(userID, userName);
  };

};
