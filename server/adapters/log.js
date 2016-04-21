//
// Adapter Log
//

var logModel = require('../models/log');
var logger  = require('../libs/bunyan');

//
// Create a child for logger module and return it to managers
// A logger child is just a logger with an header
// The stream is the same as the parent's
//
module.exports.createChild = function (libs, header) {
  return libs.logger.child(header);
};

//
// Get all the log from userId
//
module.exports.getLogsById = function (userId) {
  logModel.find({ header: { userId: userId } });
};

//
// Get limited amout of logs from userId
// given by limit parameter
// and return the result
//
module.exports.getLimitedLogsById = function (userId, limit) {
  logModel
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
