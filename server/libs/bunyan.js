module.exports = function initBunyan(libs, conf) {

  libs.bunyan = require('bunyan');

  const Log = require('../models')(libs, {}).log;

  const bunyanMongodbStream = require('bunyan-mongodb-stream')({ model: Log });

  libs.logger = new libs.bunyan.createLogger({
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
        path: './log/error.log',
      },
    ],
    serializers: libs.bunyan.stdSerializers,
  });

};
