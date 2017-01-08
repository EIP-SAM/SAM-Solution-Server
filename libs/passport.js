const UsersManager = require('../managers/users');
const UsersAdapter = require('../adapters/users');

module.exports = function initPassport(app) {
  const passport = require('passport');
  const LocalStrategy = require('passport-local');

  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(new LocalStrategy(
    (username, password, done) => {
      UsersManager.identifyUser(username, password).then((user) => {
        done(null, user);
      }).catch((identificationError, internalError) => {
        if (internalError) {
          done(internalError);
        } else {
          done(null, false, { message: identificationError });
        }
      });
    }));

  passport.serializeUser((user, done) => {
    if (user && user.id) {
      done(null, user.id);
    } else {
      done({ message: 'Passport serializer: Invalid user' }, null);
    }
  });

  passport.deserializeUser((id, done) => {
    UsersAdapter.findById(id)
    .then((user) => {
      if (user) {
        return done(null, user);
      } else {
        return done({ message: 'Passport deserializer: User not found' }, null);
      }
    });
  });

  return passport;
};
