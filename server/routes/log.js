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

    var promise = logManager.getLimitedLogs(parseInt(req.body.limit));

    promise.then(function (logs) {
      res.json(logs);
    });
  });

  //
  // Get logs by level
  //
  app.post('/log/level', function (req, res) {

    var promise = logManager.getLogsByLevel(parseInt(req.body.level));

    promise.then(function (logs) {
      res.json(logs);
    });
  });

  //
  // Get logs below level given
  //
  app.post('/log/level/below', function (req, res) {

    var promise = logManager.getLogsBelowLevel(parseInt(req.body.level));

    promise.then(function (logs) {
      res.json(logs);
    });
  });

  //
  // Get logs above level given
  //
  app.post('/log/level/above', function (req, res) {

    var promise = logManager.getLogsAboveLevel(parseInt(req.body.level));

    promise.then(function (logs) {
      res.json(logs);
    });
  });

  //
  // Get logs by module name
  //
  app.post('/log/module/:module_name', function (req, res) {

    var promise = logManager.getLogByModuleName(req.params.module_name);

    promise.then(function (logs) {
      res.json(logs);
    });
  });

  //
  // Get limited logs by module name
  //
  app.post('/log/module/:module_name', function (req, res) {

    var promise = logManager.getLogByModuleName(req.params.module_name, parseInt(req.body.limit));

    promise.then(function (logs) {
      res.json(logs);
    });
  });

  //
  // Get all the log from a client by his id
  //
  app.post('/log/:user_id', function (req, res) {

    var promise = logManager.getLogsById(req.params.user_id);

    promise.then(function (logs) {
      res.json(logs);
    });
  });

  //
  // Get a limited logs from a client by his id
  //
  app.post('/log/:user_id/limited', function (req, res) {

    var promise = logManager.getLimitedLogsById(req.params.user_id, parseInt(req.body.limit));

    promise.then(function (logs) {
      res.json(logs);
    });
  });

  //
  // Get logs by level and id
  //
  app.post('/log/:user_id/level', function (req, res) {

    var promise = logManager.getLogsByLevelById(req.params.user_id, parseInt(req.body.level));

    promise.then(function (logs) {
      res.json(logs);
    });
  });

  //
  // Get logs below level given
  //
  app.post('/log/:user_id/level/below', function (req, res) {

    var promise = logManager.getLogsBelowLevelById(req.params.user_id, parseInt(req.body.level));

    promise.then(function (logs) {
      res.json(logs);
    });
  });

  //
  // Get logs above level given
  //
  app.post('/log/:user_id/level/above', function (req, res) {

    var promise = logManager.getLogsAboveLevelById(req.params.user_id, parseInt(req.body.level));

    promise.then(function (logs) {
      res.json(logs);
    });
  });
};

//
// Get logs by module name from user id
//
app.post('/log/:user_id/module/:module_name', function (req, res) {

  var promise = logManager.getLogByModuleName(req.params.user_id, req.params.module_name);

  promise.then(function (logs) {
    res.json(logs);
  });
});

//
// Get limited logs by module name from user id
//
app.post('/log/:user_id/module/:module_name', function (req, res) {

  var promise = logManager.getLogByModuleName(
    req.params.user_id,
    req.params.module_name,
    parseInt(req.body.limit)
  );

  promise.then(function (logs) {
    res.json(logs);
  });
});
