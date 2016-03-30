module.exports = function (libs, conf) {
  libs.mongoose = require('mongooes');
  libs.bunyan = require('bunyan');

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
  });
};
