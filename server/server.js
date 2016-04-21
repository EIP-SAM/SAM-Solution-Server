// retrieve configuration from main config file
const config = require('./config/base.config.json');
config.rootFolder = __dirname;

var app = require('./libs/express')(config);

require('./routes')(app, config);

var server = app.listen(config.port, function () {
  console.log('Listening on port ' + config.port);
});
