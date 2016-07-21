/*
** Statistic module routes
*/

var statController = require('../controllers/statistic');

module.exports = function initStatisticRoutes(app, conf) {
  //
  //// GET requests

  app.get('/statistic_filters', function (req, res) {
    var data = statController.getStatisticFilters();
    res.json(data);
  });

  app.get('/statistic_select_graph', function (req, res) {
    var data = statController.getStatisticDataByType(req.query.type).then(function(data){
      res.json(data);
    })
  });
};
