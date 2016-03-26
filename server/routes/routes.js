//
// Important note: An issue very similar to these
//   - https://github.com/mweibel/connect-session-sequelize/issues/23
//   - https://github.com/mweibel/connect-session-sequelize/issues/20
//   occured with a previous version of this code. Sometimes it needed multiple
//   login requests to finally log into the system.
//   It has been fixed using the solution provided by busheezy in the gh issue.
//   This solution should be temporary, but I have no idea of when it might be
//   resolved, as this issue is on an higher level than the
//   connect-session-sequelize repository.
//   Please be careful with that if any new bug occurs here! Mainly if an
//   `$> npm update --save` is made to this repository.
//   Author: Grenadingue
//

module.exports = function initBaseRoutes(libs, conf, managers) {
  const ensureLoggedIn = libs.connectEnsureLogin.ensureLoggedIn;
  const ensureLoggedOut = libs.connectEnsureLogin.ensureLoggedOut;

  //
  //// GET requests

  // Public static folder access
  libs.app.use(libs.express.static(conf.rootFolder + '/public'));

  // Main page
  libs.app.get('/', function (req, res) {
    res.redirect('/index.html');
  });

  libs.app.get('/index.html',
    function (req, res) {
      res.render('index');
    }
  );

  // Users management
  libs.app.get('/login-signup-poc.html',
    ensureLoggedOut('/logged-in-logout-poc.html'),
    function (req, res) {
      res.render('login-signup-poc');
    }
  );

  libs.app.get('/logged-in-logout-poc.html',
    ensureLoggedIn('/login-signup-poc.html'),
    function (req, res) {
      res.render('logged-in-logout-poc', { user: req.user });
    }
  );

  libs.app.get('/logout',
    function (req, res) {
      req.logout();
      req.session.save(function () {
        res.redirect('/index.html');
      });
    }
  );

  //
  //// POST requests

  // Users management
  libs.app.post('/login',
    libs.passport.authenticate('local', { failureRedirect: '/index.html' }),
    function (req, res) {
      req.session.save(function () {
        res.redirect('/logged-in-logout-poc.html');
      });
    }
  );

  libs.app.post('/sign-up',
    managers.users.createUser({ failureRedirect: '/index.html' }),
    function (req, res) {
      req.session.save(function () {
        res.redirect('/login-signup-poc.html');
      });
    }
  );
};
