module.exports = function initExpress(conf) {
  var express = require('express');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var flash = require('connect-flash');

  // init express
  var app = express();

  // init global middleware
  app.use(cookieParser(conf.secret));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(flash());

  require('./ejs')(app, conf);
  require('./sequelizeSession')(app, conf);
  require('./connectFlash')(app);
  return app;
};
