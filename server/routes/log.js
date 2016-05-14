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
  // Get all logs from database
  // Do not use this in prod !
  //
  app.get('/log', function (req, res) {

    var promise = logManager.getLogs();

    promise.then(function (logs) {

      res.json(logs);
    });
  });

  //
  // Get limited logs from all logs
  //
  app.post('/log/limited', function (req, res) {
    res.send(logManager.getLimitedLogs(req.body.limit));
  });

  //
  // Get logs by level
  //
  app.post('/log/level', function (req, res) {
    res.send(logManager.getLogsByLevel(req.body.level));
  });

  //
  // Get logs below level given
  //
  app.post('/log/level/below', function (req, res) {
    res.send(logManager.getLogsBelowLevel(req.body.level));
  });

  //
  // Get logs above level given
  //
  app.post('/log/level/above', function (req, res) {
    res.send(logManager.getLogsAboveLevel(req.body.level));
  });

  //
  // Get all the log from a client by his id
  //
  app.post('/log/:user_id', function (req, res) {
    res.send(logManager.getLogsById(req.params.user_id));
  });

  //
  // Get a limited logs from a client by his id
  //
  app.post('/log/:user_id/limited', function (req, res) {
    res.send(logManager.getLimitedLogsById(req.params.user_id, req.body.limit));
  });

  //
  // Get logs by level and id
  //
  app.post('/log/:user_id/level', function (req, res) {
    res.send(logManager.getLogsByLevelById(req.params.user_id, req.body.level));
  });

  //
  // Get logs below level given
  //
  app.post('/log/:user_id/level/below', function (req, res) {
    res.send(logManager.getLogsBelowLevelById(req.params.user_id, req.body.level));
  });

  //
  // Get logs above level given
  //
  app.post('/log/:user_id/level/above', function (req, res) {
    res.send(logManager.getLogsAboveLevelById(req.params.user_id, req.body.level));
  });
};
