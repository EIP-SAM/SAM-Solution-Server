// retrieve configuration from main config file
const config = require('./config/base.config.json');
config.rootFolder = __dirname;

// retrieve libs
const libs = require('./libs')(config);

// retrieve models
const models = require('./models')(libs, config);

// retrieve workers
const workers = require('./workers')(libs, config);

// retrieve adapters
const adapters = require('./adapters')(libs, config, models, workers);

// retrieve managers
const managers = require('./managers')(libs, config, adapters);

// init controllers
require('./controllers')(libs, config, managers, adapters);

// init routes
require('./routes')(libs, config, managers);

// start server
var server = libs.app.listen(config.port, function () {
  console.log('Listening on port ' + config.port);
});
