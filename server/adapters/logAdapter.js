//
// Adapter Log
//
module.exports = function initLogAdapter(models, adapters) {

  //
  // Initialize Bunyan logger and store it in libs
  // @TODO: Fix model dependency
  //
  adapters.createLogger = function (libs) {

    const Log = models.log;

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

  //
  // Create a child for logger module and return it to managers
  // A logger child is just a logger with an header
  // The stream is the same as the parent's
  //
  adapters.createChild = function (libs, header) {
    return libs.logger.child(header);
  };

  //
  // Get all the log from userId
  //
  adapters.getLogsById = function (userId) {
    models.log.find({ header: { userId: userId } });
  };

  //
  // Get limited amout of logs from userId
  // given by limit parameter
  // and return the result
  //
  adapters.getLimitedLogsById = function (userId, limit) {
    models.log
    .find({ header: { userId: userId } })
    .limit(limit)
    .exec(function (err, logs) {
      if (err) {
        libs.logger(err);
        return { error: true, data:err };
      } else {
        return { error: false, data: logs };
      }
    });
  };
};
