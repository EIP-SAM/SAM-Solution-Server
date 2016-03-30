module.exports = function (libs, conf) {
  libs.mongoose = require('mongoose');
  libs.bunyan = require('bunyan');

  const Log = require('../models/log').iniLogModel(libs, {});
  const bunyanMongodbStream = require('bunyan-mongodb-stream')({ model: Log });

  var url = 'mongodb://';
  url += conf.host;
  url += ':' + conf.port;
  url += '/' + conf.database;

  libs.mongoose.connect(url);
  libs.logger = new libs.bunyan.createLogger({
    name: 'sam-logger',
    stream: [
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
