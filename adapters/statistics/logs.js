//
// Getting logsAdapters
//
const logsAdapters = require('../log');

//
// Return the numbers of logs
//
module.exports.numberOfLogsGroupByModuleName = function () {
  return new Promise(function(fulfill) {
    logsAdapters.getNumberOfLogsGroupByModuleName().then(function (logs) {

      let logsData = logs.data;
      let dataset = [];

      logsData.forEach(function(curVal, index, logsData) {
        dataset.push({
          title: curVal._id || 'Autre',
          value: [curVal.total],
        });
      });

      let returnData = {
        complete: 1,
        type: 'pie',
        title: 'Pie: Nombres de logs effectués depuis le début par nom de module',
        dataset: dataset,
      };

      fulfill(returnData);
    });
  });
};
