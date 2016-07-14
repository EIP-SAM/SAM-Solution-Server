// retrieve configuration from main config file
const config = require('./config/base.config.json');
config.rootFolder = __dirname;

var app = require('./libs/express')(config);
var logger = require('./managers/log');

require('./routes')(app, config);

var server = app.listen(config.port, function () {

  var log = logger.launchLog();

  log.info('Listening on port ' + config.port);
});

var socket = require('./daemon/').init(server);
