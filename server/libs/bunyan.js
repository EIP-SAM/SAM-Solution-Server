const bunyan = require('bunyan');
var fs = require('fs');

const Log = require('../models/log');

const bunyanMongodbStream = require('bunyan-mongodb-stream')({ model: Log });

var warnLogPath = './log';

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
      path: warnLogPath + '/error.log',
    },
  ],
  serializers: bunyan.stdSerializers,
});

module.exports = logger;
