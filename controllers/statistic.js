var statManagers = require('../managers/statistic');

module.exports.getStatisticFilters = function () {
  statManagers.initiateGraphs();
  return statManagers.getStatisticFilters();
}

module.exports.getStatisticDataByType = function (type) {
  return statManagers.getAllStatisticsByType(type);
}
