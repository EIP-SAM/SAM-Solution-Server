var statManagers = require('../managers/statistic');

module.exports.getAllStatistics = function (req, res) {
  statManagers.initSampleStatistics();
  return statManagers.getAllStatistics();
};

module.exports.getStatisticData = function () {
  statManagers.initSampleStatistics();
  return statManagers.getAllStatistics();
}

module.exports.getStatisticFilters = function () {
  statManagers.initSampleStatistics();
  return statManagers.getStatisticFilters();
}

module.exports.getStatisticDataByType = function (type) {
  statManagers.initSampleStatistics();
  return statManagers.getAllStatisticsByType(type);
}
