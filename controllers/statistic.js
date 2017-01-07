const statManagers = require('../managers/statistic');

module.exports.getStatisticFilters = function () {
  statManagers.initiateGraphs();
  return statManagers.getStatisticFilters();
};

module.exports.getStatisticTypeAndNameListByType = function (type) {
  statManagers.initiateGraphs();
  return statManagers.getStatisticTypeAndNameListByType(type);
};

module.exports.getStatisticDataByTypeAndName = function (type, name) {
  return new Promise((fulfill, reject) => {
    statManagers.initiateGraphs();
    statManagers.getStatisticByTypeAndName(type, name).then((result) => {
      fulfill(result);
    });
  });
};
