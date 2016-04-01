module.exports = function initPassport(libs, conf) {
  libs.passport = require('passport');
  libs.LocalStrategy = require('passport-local');
  libs.User = require('../models/users');
  libs.sha256 = require('js-sha256');
  libs.app.use(libs.passport.initialize());
  libs.app.use(libs.passport.session());
};
