//
// Manager Log
//
const logAdapter = require('../adapters/log');

//
// Launch getLogsWithMultipleCriteria from adapters and return the result
//
module.exports.getLogsWithMultipleCriteria = function (criteria) {

  return new Promise(function (fulfill) {

    var promise = logAdapter.getLogsWithMultipleCriteria(criteria);

    promise.then(function (logs) {
      fulfill(logs);
    });
  });
};

//
// Launch getNumberOfLogsGroupByModuleName adapters and return the result
//
module.exports.getNumberOfLogsGroupByModuleName = function () {
  return new Promise(function (fulfill) {
    var promise = logAdapter.getNumberOfLogsGroupByModuleName();

    promise.then(function (logs) {
      fulfill(logs);
    })
  });
}

//
// Launch getNumberOfLogsGroupByModuleName adapters and return the result
//
module.exports.getNumberOfLogsGroupByLevel = function () {
  return new Promise(function (fulfill) {
    var promise = logAdapter.getNumberOfLogsGroupByLevel();

    promise.then(function (logs) {
      fulfill(logs);
    })
  });
}
