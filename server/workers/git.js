//
// Worker Git
//
module.exports = function initGitWorker(workers, libs, conf) {

  //
  // Get last commit for a given repo
  //
  workers.initNewGitRepo = function (userId, userName) {
    var pathToRepo =  conf.git.baseDir + userName + '_' + userId + '/';
    var isBare = 1; // lets make it bare, aka a .git folder

    libs.nodegit.Repository.init(pathToRepo, isBare).then(function (repo) {
      console.log('Repo for ' + userName + ' created');
    }).catch(function (err) {
      console.log(err);
    });

    return pathToRepo;
  };

};
