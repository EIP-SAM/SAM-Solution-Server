//
// Adapter Log
//

/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */

const logModel = require('../models/log');
const logger = require('../libs/bunyan');
const moment = require('../libs/moment');

//
// Get the logs from multiple options.
// It is a method that will allow you to get logs from several criteria
// instead of using several method to get all the critetia you need.
//
module.exports.getLogsWithMultipleCriteria = queryCriteria => new Promise((fulfill) => {
  if (queryCriteria === undefined) {
    fulfill({ error: false, data: {} });
  }

  let criteria = queryCriteria;

  if (typeof criteria === 'string') {
    criteria = JSON.parse(queryCriteria);
  } else {
    criteria = queryCriteria;
  }

  const findOpts = {};
  let key;

  for (key in criteria) {
    if (criteria.hasOwnProperty(key)) {
      if (criteria[key].length === 0) {
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
      const day = moment.makeDayFromString(criteria.findOpts.day);

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

  const query = logModel.find(findOpts);

  if (criteria.limit !== undefined) {
    let limit;
    if (typeof criteria.limit === 'string') {
      limit = parseInt(criteria.limit, 10);
    } else {
      limit = criteria.limit;
    }

    query.limit(limit);
  }

  query.sort('-time').exec((err, logs) => {
    if (err) {
      logger.error(err);
      fulfill({ error: true, data: err });
    } else {
      fulfill({ error: false, data: logs });
    }
  });
});

//
// Get the numbers of logs group by module name
//
module.exports.getNumberOfLogsGroupByModuleName = () => {
  const aggregate = [
    {
      $group: {
        _id: '$moduleName',
        total: {
          $sum: 1,
        },
      },
    },
  ];

  return new Promise((fulfill) => {
    logModel.aggregate(aggregate, (err, logs) => {
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
module.exports.getNumberOfLogsGroupByLevel = () => {
  const aggregate = [
    {
      $group: {
        _id: '$level',
        total: {
          $sum: 1,
        },
      },
    },
  ];

  return new Promise((fulfill) => {
    logModel.aggregate(aggregate, (err, logs) => {
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
module.exports.getNumberOfSoftwareGroupByActionName = () => new Promise((fulfill) => {
  logModel.find({ moduleName: 'Software' }, (err, logs) => {
    if (err) {
      logger.error(err);
      fulfill({ error: true, data: err });
    } else {
      fulfill({ error: false, data: logs });
    }
  });
});
