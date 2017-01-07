//
// Manager Log
//
const logAdapter = require('../adapters/log');

//
// Launch getLogsWithMultipleCriteria from adapters and return the result
//
module.exports.getLogsWithMultipleCriteria = function (criteria) {
  return new Promise((fulfill) => {
    const promise = logAdapter.getLogsWithMultipleCriteria(criteria);

    promise.then((logs) => {
      fulfill(logs);
    });
  });
};

//
// Launch getNumberOfLogsGroupByModuleName adapters and return the result
//
module.exports.getNumberOfLogsGroupByModuleName = function () {
  return new Promise((fulfill) => {
    const promise = logAdapter.getNumberOfLogsGroupByModuleName();

    promise.then((logs) => {
      fulfill(logs);
    });
  });
};

//
// Launch getNumberOfLogsGroupByModuleName adapters and return the result
//
module.exports.getNumberOfLogsGroupByLevel = function () {
  return new Promise((fulfill) => {
    const promise = logAdapter.getNumberOfLogsGroupByLevel();

    promise.then((logs) => {
      fulfill(logs);
    });
  });
};
