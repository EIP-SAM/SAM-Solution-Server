//
// Manager Log
//
const logAdapter = require('../adapters/log');

//
// Launch getLogsWithMultipleCriteria from adapters and return the result
//
module.exports.getLogsWithMultipleCriteria = criteria => new Promise((fulfill) => {
  const promise = logAdapter.getLogsWithMultipleCriteria(criteria);

  promise.then((logs) => {
    fulfill(logs);
  });
});

//
// Launch getNumberOfLogsGroupByModuleName adapters and return the result
//
module.exports.getNumberOfLogsGroupByModuleName = () => new Promise((fulfill) => {
  const promise = logAdapter.getNumberOfLogsGroupByModuleName();

  promise.then((logs) => {
    fulfill(logs);
  });
});

//
// Launch getNumberOfLogsGroupByModuleName adapters and return the result
//
module.exports.getNumberOfLogsGroupByLevel = () => new Promise((fulfill) => {
  const promise = logAdapter.getNumberOfLogsGroupByLevel();

  promise.then((logs) => {
    fulfill(logs);
  });
});
