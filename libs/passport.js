const UsersManager = require('../managers/users');
const UsersAdapter = require('../adapters/users');

module.exports = function initPassport(app) {
  var passport = require('passport');
  var LocalStrategy = require('passport-local');

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(
    function (username, password, done) {

      UsersManager.identifyUser(username, password).then(function (user) {
        done(null, user);
      }).catch(function (identificationError, internalError) {
        if (internalError) {
          done(internalError);
        } else {
          done(null, false, { message: identificationError });
        }
      });
    }
  ));

  passport.serializeUser(function (user, done) {
    if (user && user.id) {
      done(null, user.id);
    } else {
      done({ message: 'Passport serializer: Invalid user' }, null);
    }
  });

  passport.deserializeUser(function (id, done) {
    UsersAdapter.findById(id)
    .then(function (user) {
      if (user) {
        return done(null, user);
      } else {
        return done({ message: 'Passport deserializer: User not found' }, null);
      }
    });
  });

  return passport;
};
