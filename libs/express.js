module.exports = function initExpress(conf) {
  var express = require('express');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var flash = require('connect-flash');

  // init express
  var app = express();

  // init global middleware
  app.use(cookieParser(conf.secret));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(flash());

  app.use(function(req, res, next) {
    if (req.get('origin'))
      res.setHeader('Access-Control-Allow-Origin', req.get('origin'));
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  require('./sequelizeSession')(app, conf);
  require('./connectFlash')(app);
  return app;
};
