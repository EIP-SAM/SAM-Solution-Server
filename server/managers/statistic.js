module.exports = function initStatisticManager(adapters, managers) {

  managers.testStatistic = function() {
    adapters.test();
  }

};
