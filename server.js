// retrieve configuration from main config file
const config = require('./config/base.config.json');
config.rootFolder = __dirname;

var app = require('./libs/express')(config);
var logger = require('./libs/bunyan');
var SocketIO = require('./libs/socket-io');

var migrationController = require('./controllers/migration');

require('./models/init')().then(function () {
  require('./routes')(app, config);
  var server = app.listen(config.port, function () {
    logger.info('Listening on port ' + config.port);
  });
  var socket = SocketIO.init(server);
  migrationController.initCheckMigration();
}).catch(function(err) {
  console.log(err);
});
