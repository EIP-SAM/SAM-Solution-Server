var StatAdapters = require('../adapters/statistic');

module.exports.testStatistic  = function () {
  StatAdapters.test();
};

module.exports.statisticFunctions = [];

module.exports.statisticRegisterMethodForEntity = function (entity, functionName, functionData) {
  if (libs.statisticFunctions[entity] == null) {
    libs.statisticFunctions[entity] = [];
  }

  libs.statisticFunctions[entity][functionName] = functionData;
};
