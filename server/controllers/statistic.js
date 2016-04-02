module.exports = function initStatisticController(managers, controllers) {
  controllers.testStatistic = function(req, res) {
    managers.testStatistic();
  }
}
