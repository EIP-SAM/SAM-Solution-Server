/*
** Statistic module routes
*/

var statController = require('../controllers/statistic');

module.exports = function initStatisticRoutes(app, conf) {
  //
  //// GET requests

  app.get('/api/logged-in/admin/statistic_filters', function (req, res) {
    var data = statController.getStatisticFilters();
    res.json(data);
  });

  app.get('/api/logged-in/admin/statistic_data_by_type_name', function (req, res) {
    statController.getStatisticDataByTypeAndName(req.query.type, req.query.name).then(function(data){
        res.json(data);
    })
  });

  app.get('/api/logged-in/admin/statistic_data_type_name_list', function (req, res) {
    var data = statController.getStatisticTypeAndNameListByType(req.query.type);
    res.json(data);
  });
};
