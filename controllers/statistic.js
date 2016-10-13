var statManagers = require('../managers/statistic');

module.exports.getStatisticFilters = function () {
  statManagers.initiateGraphs();
  return statManagers.getStatisticFilters();
}

module.exports.getStatisticTypeAndNameListByType = function (type) {
    statManagers.initiateGraphs();

    return statManagers.getStatisticTypeAndNameListByType(type);
}

module.exports.getStatisticDataByTypeAndName = function (type, name) {
    return new Promise(function(fulfill, reject){
        statManagers.initiateGraphs();
        statManagers.getStatisticByTypeAndName(type, name).then(function(result){
            fulfill(result);
        });
    });
}
