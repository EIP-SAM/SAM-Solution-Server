module.exports = function initStatisticController(managers, controllers, libs) {
  controllers.testStatistic = function(req, res) {
    managers.testStatistic();
  }
}
