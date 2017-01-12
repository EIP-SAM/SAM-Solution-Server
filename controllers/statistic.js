const statManagers = require('../managers/statistic');

module.exports.getStatisticFilters = () => {
  statManagers.initiateGraphs();
  return statManagers.getStatisticFilters();
};

module.exports.getStatisticTypeAndNameListByType = (type) => {
  statManagers.initiateGraphs();
  return statManagers.getStatisticTypeAndNameListByType(type);
};

module.exports.getStatisticDataByTypeAndName = (type, name) => new Promise((fulfill) => {
  statManagers.initiateGraphs();
  statManagers.getStatisticByTypeAndName(type, name).then((result) => {
    fulfill(result);
  });
});
