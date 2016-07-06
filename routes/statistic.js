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

  app.get('/statistic_data', function (req, res) {
    var data = statController.getStatisticData();
    res.json(data);
  });

  app.get('/statistic_filters', function (req, res) {
    var data = statController.getStatisticFilters();
    res.json(data);
  });

  app.get('/statistic_select_graph', function (req, res) {
    console.log(req.get('type'));
    var data = statController.getStatisticDataByType(req.get('type'));
    res.json(data);
  });
};
