//
// Getting logsAdapters
//
const logsAdapters = require('../log');

//
// Return the numbers of success actions by action name
//
module.exports.numberOfSoftwaresSuccessActions = function() {
  return numberOfSoftwaresGroupByActionName('successfuly', 'Pie: Software success actions');
}

//
// Return the numbers of failed actions by action name
//
module.exports.numberOfSoftwaresFailActions = function() {
  return numberOfSoftwaresGroupByActionName('failed', 'Pie: Software failed actions');
}

//
// Return the numbers of logs group by action name
//
let numberOfSoftwaresGroupByActionName = function (status, title) {
  return new Promise(function(fulfill) {
    logsAdapters.getNumberOfSoftwareGroupByActionName().then(function (logs) {
      let logsData = logs.data;
      let dataset = [];

      getNbSoftwareActions(logsData, "install", status, dataset);
      getNbSoftwareActions(logsData, "update", status, dataset);
      getNbSoftwareActions(logsData, "remove", status, dataset);

      let returnData = {
        complete: 1,
        type: 'pie',
        title: title,
        dataset: dataset,
      };

      fulfill(returnData);
    });
  });
};

let getNbSoftwareActions = function(logsData, action, status, dataset) {
  var total = 0;
  logsData.forEach(function(curVal, index, logsData) {
    if (curVal.msg.indexOf(action) != -1 && curVal.msg.indexOf(status) != -1)
      total++;
  });
  dataset.push({
    title: action,
    value: total,
  });
}
