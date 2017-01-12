//
// Getting logsAdapters
//
const logsAdapters = require('../log');

const getNbSoftwareActions = (logsData, action, status, dataset) => {
  let total = 0;
  logsData.forEach((curVal) => {
    if (curVal.msg.indexOf(action) !== -1 && curVal.msg.indexOf(status) !== -1) {
      total += 1;
    }
  });
  dataset.push({
    title: action,
    value: total,
  });
};

//
// Return the numbers of logs group by action name
//
const numberOfSoftwaresGroupByActionName = (status, title) => new Promise((fulfill) => {
  logsAdapters.getNumberOfSoftwareGroupByActionName().then((logs) => {
    const logsData = logs.data;
    const dataset = [];

    getNbSoftwareActions(logsData, 'install', status, dataset);
    getNbSoftwareActions(logsData, 'update', status, dataset);
    getNbSoftwareActions(logsData, 'remove', status, dataset);

    const returnData = {
      complete: 1,
      type: 'pie',
      title,
      dataset,
    };

    fulfill(returnData);
  });
});

//
// Return the numbers of success actions by action name
//
module.exports.numberOfSoftwaresSuccessActions = () => numberOfSoftwaresGroupByActionName('successfuly', 'Pie: Software success actions');

//
// Return the numbers of failed actions by action name
//
module.exports.numberOfSoftwaresFailActions = () => numberOfSoftwaresGroupByActionName('failed', 'Pie: Software failed actions');
