//
// Worker Git
//
//
var Git = require('../libs/nodegit');
var conf = require('./config/git.config.json');

//
// Get last commit for a given repo
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
