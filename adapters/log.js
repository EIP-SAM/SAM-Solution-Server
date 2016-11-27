//
// Adapter Log
//

var logModel = require('../models/log');
var logger  = require('../libs/bunyan');
var moment = require('../libs/moment');

//
// Get the logs from multiple options.
// It is a method that will allow you to get logs from several criteria
// instead of using several method to get all the critetia you need.
//
module.exports.getLogsWithMultipleCriteria = function (queryCriteria) {
  return new Promise(function (fulfill) {

    if (queryCriteria === undefined) {
      fulfill({ error: false, data: {} });
    }

    var criteria = queryCriteria;

    if (typeof criteria === 'string') {
      criteria = JSON.parse(queryCriteria);
    } else {
      criteria = queryCriteria;
    }

    var findOpts = {};
    var key;

    for (key in criteria) {
      if (criteria.hasOwnProperty(key)) {
        if (criteria[key].length == 0) {
          delete criteria[key];
        }
      }
    }

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
        findOpts.level = findOpts.level || {};
        findOpts.level.$gte = criteria.findOpts.levelAbove;
      }

      if (criteria.findOpts.levelBelow !== undefined) {
        findOpts.level = findOpts.level || {};
        findOpts.level.$lte = criteria.findOpts.levelBelow;
      }

      if (criteria.findOpts.day !== undefined) {
        var day = moment.makeDayFromString(criteria.findOpts.day);

        findOpts.time = {
          $gte: moment.getMomentToDate(day.startDate),
          $lte: moment.getMomentToDate(day.endDate),
        };
      }

      if (criteria.findOpts.afterDate !== undefined) {
        findOpts.time = findOpts.time || {};
        findOpts.time.$gte = moment.getMomentToDate(criteria.findOpts.afterDate);
      }

      if (criteria.findOpts.beforeDate !== undefined) {
        findOpts.time = findOpts.time || {};
        findOpts.time.$lte = moment.getMomentToDate(criteria.findOpts.beforeDate);
      }
    }

    var query = logModel.find(findOpts);

    if (criteria.limit !== undefined) {
      if (typeof criteria.limit == 'string') {
        var limit = parseInt(criteria.limit);
      } else {
        var limit = criteria.limit;
      }

      query.limit(limit);
    }

    query.sort('-time').exec(function (err, logs) {

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
// Get the numbers of logs group by module name
//
module.exports.getNumberOfLogsGroupByModuleName = function() {
  var aggregate = [
    {
      $group: {
        _id: '$moduleName',
        total: {
          $sum: 1
        }
      }
    }
  ];

  return new Promise(function (fulfill) {
    logModel.aggregate(aggregate, function(err, logs) {
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
// Get the numbers of logs group by level
//
module.exports.getNumberOfLogsGroupByLevel = function() {
  var aggregate = [
    {
      $group: {
        _id: '$level',
        total: {
          $sum: 1
        }
      }
    }
  ];

  return new Promise(function (fulfill) {
    logModel.aggregate(aggregate, function(err, logs) {
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
// Get the numbers of software actions group by action name
//
module.exports.getNumberOfSoftwareGroupByActionName = function() {
  return new Promise(function (fulfill) {
    logModel.find({moduleName: "Software"}, function(err, logs) {
      if (err) {
        logger.error(err);
        fulfill({ error: true, data: err });
      } else {
        fulfill({ error: false, data: logs });
      }
    });
  });
};
