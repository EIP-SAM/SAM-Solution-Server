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

var socket = require('./socket-io/').init(server);

let save = require('./socket-io/save');
setTimeout(function() {save.exec('titi', '/home/titi');}, 0);
setTimeout(function() {save.exec('titi', '/home/titi', function(msg) {console.log('return from save : ', msg)});}, 5000);
