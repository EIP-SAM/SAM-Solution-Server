var statManagers = require('../managers/statistic');

module.exports.getAllStatistics = function (req, res) {
  statManagers.initSampleStatistics();
  return statManagers.getAllStatistics();
};
