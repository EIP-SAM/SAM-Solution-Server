module.exports = function initPassport(libs, conf) {
  libs.passport = require('passport');
  libs.LocalStrategy = require('passport-local');

  libs.app.use(libs.passport.initialize());
  libs.app.use(libs.passport.session());
};
