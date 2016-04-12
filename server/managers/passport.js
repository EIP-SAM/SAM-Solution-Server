module.exports.init = function (libs, conf, managers, adapters) {
  const UsersManager = managers.users;

  libs.passport.use(new libs.LocalStrategy(
    function (username, password, done) {
      UsersManager.identifyUser(username, password)
      .then(function (user) {
        done(null, user);
      },

      function (error) {
        done(null, false, { message: error });
      });
    }
  ));

  libs.passport.serializeUser(function (user, done) {
    if (user && user.id) {
      done(null, user.id);
    } else {
      done({ message: 'Passport serializer: Invalid user' }, null);
    }
  });

  libs.passport.deserializeUser(function (id, done) {
    adapters.Users.findById(id)
    .then(function (user) {
      if (user) {
        return done(null, user);
      } else {
        return done({ message: 'Passport deserializer: User not found' }, null);
      }
    });
  });
};
