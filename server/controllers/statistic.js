var StatManagers = require('../managers/statistic');

module.exports.getAllStatistics = function (req, res) {
  StatManagers.initSampleStatistics();
  return StatManagers.getAllStatistics();
};
