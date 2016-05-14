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
module.exports.createChild = function (header) {
  return logger.child(header);
};

//
// Get all the log from database
//
module.exports.getLogs = function () {

  return new Promise(function (fulfill) {

    logModel.find({})
    .exec(function (err, logs) {

      if (err) {

        logger(err);
        fulfill({ error: true, data: err });
      } else {

        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get logs by level
//
module.exports.getLogsByLevel = function (level) {
  logModel.find({ level: level })
  .exec(function (err, logs) {
    if (err) {
      logger(err);
      return { error: true, data: err };
    } else {
      return { error: false, data: logs };
    }
  });
};

//
// Get logs below level given (included)
//
module.exports.getLogsBelowLevel = function (level) {
  logModel.find({ level: { $lt: level } })
  .exec(function (err, logs) {
    if (err) {
      logger(err);
      return { error: true, data: err };
    } else {
      return { error: false, data: logs };
    }
  });
};

//
// Get logs above level given (included)
//
module.exports.getLogsAboveLevel = function (level) {
  logModel.find({ level: { $gt: level } })
  .exec(function (err, logs) {
    if (err) {
      logger(err);
      return { error: true, data: err };
    } else {
      return { error: false, data: logs };
    }
  });
};

//
// Get limited amout of logs from database
// given by limit parameter
// and return the result
//
module.exports.getLimitedLogs = function (limit) {
  logModel
  .find({})
  .limit(limit)
  .exec(function (err, logs) {
    if (err) {
      logger(err);
      return { error: true, data:err };
    } else {
      return { error: false, data: logs };
    }
  });
};

//
// Get all the log from userId
//
module.exports.getLogsById = function (userId) {
  logModel.find({ header: { userId: userId } })
  .exec(function (err, logs) {
    if (err) {
      logger(err);
      return { error: true, data: err };
    } else {
      return { error: false, data: logs };
    }
  });
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
      logger(err);
      return { error: true, data:err };
    } else {
      return { error: false, data: logs };
    }
  });
};

//
// Get logs by level from user id
//
module.exports.getLogsByLevelById = function (userId, level) {
  logModel.find({ level: level, header: { userId: userId } })
  .exec(function (err, logs) {
    if (err) {
      logger(err);
      return { error: true, data: err };
    } else {
      return { error: false, data: logs };
    }
  });
};

//
// Get logs below level given (included) from user id
//
module.exports.getLogsBelowLevelById = function (userId, level) {
  logModel.find({ level: { $lt: level }, header: { userId: userId } })
  .exec(function (err, logs) {
    if (err) {
      logger(err);
      return { error: true, data: err };
    } else {
      return { error: false, data: logs };
    }
  });
};

//
// Get logs above level given (included) from user id
//
module.exports.getLogsAboveLevelById = function (userId, level) {
  logModel.find({ level: { $gt: level }, header: { userId: userId } })
  .exec(function (err, logs) {
    if (err) {
      logger(err);
      return { error: true, data: err };
    } else {
      return { error: false, data: logs };
    }
  });
};
