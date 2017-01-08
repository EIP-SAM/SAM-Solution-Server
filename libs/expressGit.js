const spawn = require('child_process').spawn;
const path = require('path');
const backend = require('git-http-backend');

const logger = require('../libs/bunyan').setModuleName('Git');
const gitConf = require('../config/git.config.json');

module.exports = function init() {
  logger.info(`Server git repository in ${gitConf.baseDir}`);
  return function (req, res) {
    const urlArray = req.url.split('/');
    const repo = urlArray[1].replace('.git', '');
    const dir = path.join(gitConf.baseDir, repo);

    req.pipe(backend(req.url, (err, service) => {
      if (err) return res.end(`${err}\n`);

      res.setHeader('content-type', service.type);
      logger.info(`${service.action} ${repo} ${JSON.stringify(service.fields)}`);

      const ps = spawn(service.cmd, service.args.concat(dir));
      ps.stdout.pipe(service.createStream()).pipe(ps.stdin);
    })).pipe(res);
  };
};
