//
// Adapter Log
//
module.exports = function initLogAdapter(models, adapters) {

  //
  // Create a child for logger module and return it to managers
  // A logger child is just a logger with an header
  // The stream is the same as the parent's
  //
  adapters.createChild = function (libs, header) {
    console.log(header);
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
