//
// Manager Git
//
module.exports = function initGitManagers(adapters, managers) {

  managers.initNewGitRepo = function (userId, userName) {
    return adapters.initNewGitRepo(userId, userName);
  };
};
