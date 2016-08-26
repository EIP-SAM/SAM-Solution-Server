const expressGit = require("express-git");
const fs = require('fs');


const logger = require('../libs/bunyan').setModuleName('Libs');

const conf = require('../config/git.config.json');

module.exports = function initExpressGit() {

  logger.info('Serve git repository in ' + conf.baseDir);
  return expressGit.serve(conf.baseDir, {
      auto_init: true,
      serve_static: true,
  });
};
