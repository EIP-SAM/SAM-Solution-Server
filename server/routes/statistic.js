/*
** Statistic module routes
*/

var StatController = require('../controllers/statistic');

module.exports = function initStatisticRoutes(app, conf) {
  //
  //// GET requests

  app.get('/statistic', function (req, res) {
    StatController.testStatistic();
    res.render('statistic_main_view.ejs');
  });

};
