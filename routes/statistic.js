/*
** Statistic module routes
*/

const statController = require('../controllers/statistic');

module.exports = function initStatisticRoutes(app, conf) {
  //
  // // GET requests

  app.get('/api/logged-in/admin/statistic_filters', (req, res) => {
    const data = statController.getStatisticFilters();
    res.json(data);
  });

  app.get('/api/logged-in/admin/statistic_data_by_type_name', (req, res) => {
    statController.getStatisticDataByTypeAndName(req.query.type, req.query.name).then((data) => {
      res.json(data);
    });
  });

  app.get('/api/logged-in/admin/statistic_data_type_name_list', (req, res) => {
    const data = statController.getStatisticTypeAndNameListByType(req.query.type);
    res.json(data);
  });
};
