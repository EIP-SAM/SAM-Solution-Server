const bunyan = require('bunyan');
const fs = require('fs');

const Log = require('../models/log');

const bunyanMongodbStream = require('bunyan-mongodb-stream')({ model: Log });

const warnLogPath = './log';

if (!fs.existsSync(warnLogPath)) {
  fs.mkdirSync(warnLogPath);
}

const logger = new bunyan.createLogger({
  name: 'sam-logger',
  streams: [
    {
      level: 'info',
      stream: bunyanMongodbStream,
    },
    {
      level: 'info',
      stream: process.stdout,
    },
    {
      level: 'warn',
      path: `${warnLogPath}/error.log`,
    },
  ],
  serializers: bunyan.stdSerializers,
});

const setLogger = (logger) => {
  logger.setModuleName = moduleName => logger.child({ moduleName });
  logger.setUser = user => logger.child({ user });
  return logger;
};

logger.setModuleName = moduleName => setLogger(logger.child({ moduleName }));

logger.setUser = user => setLogger(logger.child({ user }));

module.exports = logger;
