//
// Adapter Log
//

var logModel = require('../models/log');
var logger  = require('../libs/bunyan');
var moment = require('../libs/moment');

//
// Create a child for logger module and return it to managers
// A logger child is just a logger with an header
// The stream is the same as the parent's
//
module.exports.createChild = function (header) {
  return logger.child(header);
};

//
// Get the logs from multiple options.
// It is a method that will allow you to get logs from several criteria
// instead of using several method to get all the critetia you need.
//
module.exports.getLogsWithMultipleCriteria = function (criteria) {
  return new Promise(function (fulfill) {

    var findOpts = {};

    if (criteria.findOpts !== undefined) {
      if (criteria.findOpts.header !== undefined) {
        findOpts.header = criteria.findOpts.header;
      }

      if (criteria.findOpts._id !== undefined) {
        findOpts._id = criteria.findOpts._id;
      }

      if (criteria.findOpts.level !== undefined) {
        findOpts.level = criteria.findOpts.level;
      }

      if (criteria.findOpts.levelAbove !== undefined) {
        findOpts.level = {
          $gte: criteria.findOpts.levelAbove,
        };
      }

      if (criteria.findOpts.levelBelow !== undefined) {
        findOpts.level = {
          $lt: criteria.findOpts.levelBelow,
        };
      }

      if (criteria.findOpts.day !== undefined) {
        var day = moment.makeDayFromString(criteria.findOpts.day);

        findOpts.time = {
          $gte: moment.getMomentToDate(day.startDate),
          $lte: moment.getMomentToDate(day.endDate),
        };
      }

      if (criteria.findOpts.afterDate !== undefined) {
        findOpts.time = {
          $gte: moment.getMomentToDate(criteria.findOpts.afterDate),
        };
      }

      if (criteria.findOpts.beforeDate !== undefined) {
        findOpts.time = {
          $lte: moment.getMomentToDate(criteria.findOpts.beforeDate),
        };
      }
    }

    var query = logModel.find(findOpts);

    if (criteria.limit !== undefined) {
      query.limit(criteria.limit);
    }

    query.exec(function (err, logs) {

      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get all the log from database
//
module.exports.getLogs = function () {
  return new Promise(function (fulfill) {
    logModel.find({})
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
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
  return new Promise(function (fulfill) {
    logModel.find({ level: level })
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get logs below level given (included)
//
module.exports.getLogsBelowLevel = function (level) {
  return new Promise(function (fulfill) {
    logModel.find({ level: { $lt: level } })
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get logs above level given (included)
//
module.exports.getLogsAboveLevel = function (level) {
  return new Promise(function (fulfill) {
    logModel.find({ level: { $gt: level } })
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get limited amout of logs from database
// given by limit parameter
// and return the result
//
module.exports.getLimitedLogs = function (limit) {
  return new Promise(function (fulfill) {
    logModel.find({})
    .limit(limit)
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get all logs by module name
//
module.exports.getLogsByModuleName = function (moduleName) {
  return new Promise(function (fulfill) {
    logModel.find({ header: { module: moduleName } })
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get limited logs by module name
//
module.exports.getLimitedLogsByModuleName = function (moduleName, limit) {
  return new Promise(function (fulfill) {
    logModel.find({ header: { module: moduleName } })
    .limit(limit)
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get all logs by day
//
module.exports.getLogsByDay = function (date) {

  var newDay = moment.makeDayFromString(date);

  return new Promise(function (fulfill) {
    logModel.find({
      time: {
        $gte: newDay.startDate.toDate(),
        $lte: newDay.endDate.toDate(),
      },
    })
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get all logs after date
//
module.exports.getLogsAfterDate = function (date) {

  var newDate = moment.getMomentToDate(date);

  return new Promise(function (fulfill) {
    logModel.find({ time: { $gte: newDate } })
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get all logs before date
//
module.exports.getLogsBeforeDate = function (date) {

  var newDate = moment.getMomentToDate(date);

  return new Promise(function (fulfill) {
    logModel.find({ time: { $lte: newDate } })
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get all the log from userId
//
module.exports.getLogsById = function (userId) {
  return new Promise(function (fulfill) {
    logModel.find({ header: { userId: userId } })
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get limited amout of logs from userId
// given by limit parameter
// and return the result
//
module.exports.getLimitedLogsById = function (userId, limit) {
  return new Promise(function (fulfill) {
    logModel.find({ header: { userId: userId } })
    .limit(limit)
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get logs by level from user id
//
module.exports.getLogsByLevelById = function (userId, level) {
  return new Promise(function (fulfill) {
    logModel.find({ level: level, header: { userId: userId } })
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get logs below level given (included) from user id
//
module.exports.getLogsBelowLevelById = function (userId, level) {
  return new Promise(function (fulfill) {
    logModel.find({ level: { $lt: level }, header: { userId: userId } })
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get logs above level given (included) from user id
//
module.exports.getLogsAboveLevelById = function (userId, level) {
  return new Promise(function (fulfill) {
    logModel.find({ level: { $gt: level }, header: { userId: userId } })
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get all logs by module name from user id
//
module.exports.getLogsByModuleNameById = function (userId, moduleName) {
  return new Promise(function (fulfill) {
    logModel.find({ header: { module: moduleName, userId: userId } })
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};

//
// Get limited logs by module name from user id
//
module.exports.getLimitedLogsByModuleNameById = function (userId, moduleName, limit) {
  return new Promise(function (fulfill) {
    logModel.find({ header: { module: moduleName, userId: userId } })
    .limit(limit)
    .exec(function (err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};
