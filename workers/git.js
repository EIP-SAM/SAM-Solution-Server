//
// Worker Git
//
//
const Git = require('git-wrapper');
const fs = require('fs');

const conf = require('../config/git.config.json');
const logger = require('../libs/bunyan').setModuleName('Git');

//
// Create new repo for a user
//
module.exports.initNewGitRepo = function (userName) {
  let pathToRepo =  conf.baseDir + userName + '/';

  return new Promise(function(fullfill, reject) {
    if (fs.existsSync(pathToRepo)){
      reject("Save repo already exist for [" + userName + "] : " + pathToRepo);
    } else {
      fs.mkdirSync(pathToRepo);
      let git = new Git({cwd: pathToRepo});

      git.exec('init', {}, ['--bare']).then(function(stdout){
        logger.info('Repo for user [' + userName + '] created');
        fullfill('ok');
      }).catch(function(err) {
        console.log(err);
        reject(err);
      });

      return pathToRepo;
    }

  });
  return pathToRepo;
};
