//
// Worker Git
//
//
var Git = require('../libs/nodegit');
var conf = require('../config/git.config.json');

//
// Get last commit for a given repo
//
module.exports.getLastCommitInfo = function (userId, userName) {
  var pathToRepo =  conf.baseDir + userName + '_' + userId + '/';
  return Git.Repository.open(pathToRepo)

  // Open the master branch.
  .then(function (repo) {
    return repo.getMasterCommit();
  })

  // Display information about commits on master.
  .then(function (firstCommitOnMaster) {
    return {
      date:firstCommitOnMaster.date(),
      sha:firstCommitOnMaster.sha(),
      author: {
        name: firstCommitOnMaster.author().name(),
        mail: firstCommitOnMaster.author().email(),
      },
    };
  });
};

//
// Create new repo for a user
//
module.exports.initNewGitRepo = function (userId, userName) {
  var pathToRepo =  conf.baseDir + userName + '_' + userId + '/';
  var isBare = 1; // lets make it bare, aka a .git folder

  Git.Repository.init(pathToRepo, isBare).then(function (repo) {
    console.log('Repo for ' + userName + ' created');
  }).catch(function (err) {
    console.log(err);
  });

  return pathToRepo;
};
