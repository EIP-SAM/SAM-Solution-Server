module.exports = function initPassport(libs, conf) {
  libs.passport = require('passport');
  libs.Strategy = require('passport-local');
  libs.User = require('../models/users');
  libs.sha256 = require('js-sha256');
  libs.app.use(libs.passport.initialize());
  libs.app.use(libs.passport.session());

  libs.passport.use(new libs.Strategy(
    function (username, password, cb) {
      User.findByUserName(username).then(function (user) {
        if (!user || user.password != sha256(password)) {
          return cb(null, false);
        }
        user.save();
        return cb(null, user);
      }).catch(function (err) {
        return cb(err);
      });
    }));

    libs.passport.serializeUser(function (user, cb) {
      cb(null, user.id);
    });

    libs.passport.deserializeUser(function (id, cb) {
      User.findById(id)
      .then(function (user) {
          cb(null, user);
        }).catch(function (err) {
          return cb(err);
        });
    });
};
