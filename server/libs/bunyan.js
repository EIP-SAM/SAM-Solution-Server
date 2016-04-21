var bunyan = require('bunyan');

const Log = require('../models/log');

const bunyanMongodbStream = require('bunyan-mongodb-stream')({ model: Log });

var logger = new bunyan.createLogger({
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

module.exports = logger;
