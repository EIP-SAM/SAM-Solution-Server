// Include application configuration file
const conf = require('./config/app.config.json');

// Include and initialize needed libraries
const libs = require('./libs')(conf);

// Run main controller
require('./controllers')(conf, libs);
