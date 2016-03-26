module.exports = function initExpress(libs, conf) {
  libs.express = require('express');
  libs.cookieParser = require('cookie-parser');
  libs.bodyParser = require('body-parser');
  libs.flash = require('connect-flash');

  // init express
  libs.app = libs.express();

  // init global middleware
  libs.app.use(libs.cookieParser(conf.secret));
  libs.app.use(libs.bodyParser.urlencoded({ extended: true }));
  libs.app.use(libs.flash());
};
