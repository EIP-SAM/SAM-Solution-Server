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
  const pathToRepo = `${conf.baseDir + userName}/`;

  return new Promise((fullfill, reject) => {
    if (fs.existsSync(pathToRepo)) {
      reject(`Save repo already exist for [${userName}] : ${pathToRepo}`);
    } else {
      fs.mkdirSync(pathToRepo);
      const git = new Git({ cwd: pathToRepo });

      git.exec('init', {}, ['--bare']).then((stdout) => {
        logger.info(`Repo for user [${userName}] created`);
        fullfill('ok');
      }).catch((err) => {
        console.log(err);
        reject(err);
      });

      return pathToRepo;
    }
  });
  return pathToRepo;
};
