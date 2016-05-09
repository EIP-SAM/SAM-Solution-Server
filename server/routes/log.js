//
// Log routes
//

const logManager = require('../managers/log');

//
// Here we will create all the routes that will send back the log to
// the client
//
module.exports.initLogRoutes = function (app) {

  //
  // Get all log from database
  // Do not use this in prod !
  //
  app.get('/', function (req, res) {
    res.send(logManager.getAllLogs());
  });

  //
  // Get limited logs from all logs
  //
  app.get('/limited', function (req, res) {
    res.send(logManager.getLimitedLogs(req.body.limit));
  });

  //
  // Get all the log from a client by his id
  //
  app.get('/:user_id', function (req, res) {
    res.send(logManager.getLogsById(req.params.user_id));
  });

  //
  // Get a limited logs from a client by his id
  //
  app.get('/:user_id/limited', function (req, res) {
    res.send(logManager.getLimitedLogsById(req.params.user_id, req.body.limit));
  });
};
