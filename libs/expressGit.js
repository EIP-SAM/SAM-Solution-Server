const spawn = require('child_process').spawn;
const path = require('path');
const backend = require('git-http-backend');

const logger = require('../libs/bunyan').setModuleName('Git');
const gitConf = require('../config/git.config.json');

module.exports = function init() {
  logger.info('Serve git repository in ' + gitConf.baseDir);
  return function (req, res) {
      let urlArray = req.url.split('/');
      let repo = urlArray[1].replace('.git', '');
      let dir = path.join(gitConf.baseDir, repo);

      req.pipe(backend(req.url, function (err, service) {
          if (err) return res.end(err + '\n');

          res.setHeader('content-type', service.type);
          logger.info(service.action + ' ' + repo + ' ' + JSON.stringify(service.fields));

          let ps = spawn(service.cmd, service.args.concat(dir));
          ps.stdout.pipe(service.createStream()).pipe(ps.stdin);

      })).pipe(res);
  }
};
