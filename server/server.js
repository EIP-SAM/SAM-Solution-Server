// retrieve configuration from main config file
const config = require('./config/config.json');
config.rootFolder = __dirname;

//retrieve libs
const libs = require('./libs')(config);

// init routes
require('./routes')(libs.app);

// start server
var server = libs.app.listen(config.port, function () {
  console.log('Listening on port ' + config.port);
});
