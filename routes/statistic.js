/*
** Statistic module routes
*/

var statController = require('../controllers/statistic');

module.exports = function initStatisticRoutes(app, conf) {
  //
  //// GET requests

  app.get('/statistic_home', function (req, res) {
    var data = statController.getAllStatistics();
    res.render('statistic_main_view.ejs', { data: data });
  });

};