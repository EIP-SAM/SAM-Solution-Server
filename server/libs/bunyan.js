module.exports = function initBunyan(libs, conf) {

  libs.bunyan = require('bunyan');

  const Log = require('../models').initLogModel(libs, Log);

  const bunyanMongodbStream = require('bunyan-mongodb-stream')({ model: Log });

  libs.logger = new libs.bunyan.createLogger({
    name: 'sam-logger',
    stream: [
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
    serializers: bunyan.stdSerializers,
  });

};
