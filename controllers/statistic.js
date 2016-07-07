var statManagers = require('../managers/statistic');

module.exports.getStatisticFilters = function () {
  statManagers.initSampleStatistics();
  return statManagers.getStatisticFilters();
}

module.exports.getStatisticDataByType = function (type) {
  return statManagers.getAllStatisticsByType(type);
}
