//
// Getting logsAdapters
//
const logsAdapters = require('../log');

//
// Return the numbers of logs
//
module.exports.numberOfLogs = function () {
  return new Promise(function(fulfill) {
    logsAdapters.getNumberOfLogs().then(function (logsNumbers) {

      let returnData = {
        type: 'bar',
        labels: ['total'],
        title: 'Bar: Nombres de logs effectués depuis le début',
        dataset: [
          {
            title: 'Nombres de logs',
            data: [logsNumbers.data],
          },
        ]
      };

      fulfill(returnData);
    });
  });
};
