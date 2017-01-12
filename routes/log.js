//
// Log routes
//

const logManager = require('../managers/log');

//
// Here we will create all the routes that will
// send back the log to the client
//
module.exports = function initLogRoutes(app) {
  //
  // Get logs from multiple criteria
  //
  app.get('/api/logged-in/admin/log/multiple_criteria', (req, res) => {
    const criteria = req.query.criteria;

    const promise = logManager.getLogsWithMultipleCriteria(criteria);

    promise.then((logs) => {
      res.json(logs);
    });
  });
};
