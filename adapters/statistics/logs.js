//
// Getting logsAdapters
//
const logsAdapters = require('../log');

//
// Return the numbers of logs group by module name
//
module.exports.numberOfLogsGroupByModuleName = function () {
  return new Promise((fulfill) => {
    logsAdapters.getNumberOfLogsGroupByModuleName().then((logs) => {
      const logsData = logs.data;
      const dataset = [];

      logsData.forEach((curVal, index, logsData) => {
        dataset.push({
          title: curVal._id || 'Other',
          value: [curVal.total],
        });
      });

      const returnData = {
        complete: 1,
        type: 'pie',
        title: 'Pie: Logs numbers by module name',
        dataset,
      };

      fulfill(returnData);
    });
  });
};

//
// Return the numbers of logs group by level
//
module.exports.numberOfLogsGroupByLevel = function () {
  return new Promise((fulfill) => {
    logsAdapters.getNumberOfLogsGroupByLevel().then((logs) => {
      const logsData = logs.data;
      const dataset = [];

      logsData.forEach((curVal, index, logsData) => {
        let levelName = '';
        switch (curVal._id) {
          case 10:
            levelName = 'trace';
            break;
          case 20:
            levelName = 'debug';
            break;
          case 30:
            levelName = 'info';
            break;
          case 40:
            levelName = 'warn';
            break;
          case 50:
            levelName = 'error';
            break;
          case 60:
            levelName = 'fatal';
            break;
          default:
            levelName = 'autre';
            break;

        }
        dataset.push({
          title: levelName,
          value: [curVal.total],
        });
      });

      const returnData = {
        complete: 1,
        type: 'pie',
        title: 'Pie: Logs numbers by level',
        dataset,
      };

      fulfill(returnData);
    });
  });
};
