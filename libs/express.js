module.exports = function initExpress(conf) {
  var express = require('express');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var flash = require('connect-flash');
  var cors = require('cors');

  // init express
  var app = express();

  // init global middleware
  app.use(cookieParser(conf.secret));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(flash());
  app.use(cors());

  require('./sequelizeSession')(app, conf);
  require('./connectFlash')(app);
  return app;
};
