module.exports.init = function (libs, conf, managers, adapters) {
  const UsersManager = managers.users;

  libs.passport.use(new libs.LocalStrategy(
    function (username, password, done) {
      console.log('passport');
      UsersManager.identifyUser(username, password)
      .then(function (user) {
        console.log('found user ' + user.name + ' with id ' + user.id);
        done(null, user);
      },

      function (error) {
        console.log('passport error');
        console.log(error);
        done(null, false, { message: error });
      });
    }
  ));

  libs.passport.serializeUser(function (user, done) {
    if (user && user.id) {
      console.log('serialize user id ' + user.id);
      done(null, user.id);
    } else {
      done({ message: 'Passport serializer: Invalid user' }, null);
    }
  });

  libs.passport.deserializeUser(function (id, done) {
    adapters.Users.findById(id)
    .then(function (user) {
      if (user) {
        console.log('serialize user id ' + user.id);
        return done(null, user);
      } else {
        return done({ message: 'Passport deserializer: User not found' }, null);
      }
    });
  });
};
