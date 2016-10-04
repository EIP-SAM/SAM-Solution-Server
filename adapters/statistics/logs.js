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

      console.log('Logs numbers: ', logsNumbers);

      let returnDate = {
        type: 'bar',
        label: ['total'],
        title: 'Bar: Nombres de logs effectués depuis le début',
        dataset: [
          {
            title: 'Nombres de logs',
            data: logsNumbers,
          },
        ]
      };
      fulfill(returnDate);
    });
  });
};
