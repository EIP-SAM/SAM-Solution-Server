module.exports = function initStatistic(libs, conf) {

  libs.statisticFunctions = [];

  libs.statisticRegisterMethodForEntity = function(entity, functionName, functionData) {
    if (libs.statisticFunctions[entity] == null)
      libs.statisticFunctions[entity] = [];
    libs.statisticFunctions[entity][functionName] = functionData;
  }

};
