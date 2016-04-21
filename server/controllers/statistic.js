var StatManagers = require('../managers/statistic');

module.exports = testStatistic = function (req, res) {
  StatManagers.testStatistic();
};
