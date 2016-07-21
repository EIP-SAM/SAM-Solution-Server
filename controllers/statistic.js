var statManagers = require('../managers/statistic');

module.exports.getStatisticFilters = function () {
  statManagers.initiateGraphs();
  return statManagers.getStatisticFilters();
}

module.exports.getStatisticDataByType = function (type) {
  return new Promise(function(fulfill, reject){
    statManagers.getAllStatisticsByType(type).then(function(result){
      fulfill(result);
    });
  });
}
