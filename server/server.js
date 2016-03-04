var express = require('express');
var session = require('express-session');
var SequelizeStore = require('connect-session-sequelize')(session.Store);
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var sequelize = require('./libs/sequelize');

// retrieve configuration from main config file
var config = require('./config/config.json');

// init express
var app = express();

// setup sessionStore (since express-session is not safe for prod)
var sessionStore = new SequelizeStore({
  db: sequelize,
});

// set position of static files
app.use(express.static(__dirname + '/public'));

// session and cookie setup
app.use(cookieParser(config.secret));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: config.secret,
  store:sessionStore,
}));

// sync session store, has to be AFTER session/cookie setup
sessionStore.sync();

// init routes
require('./routes/routes.js')(app);

// start server
var server = app.listen(config.port, function () {
  console.log('Listening on port ' + config.port);
});
