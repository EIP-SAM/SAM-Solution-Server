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
      console.log('before rendering');
      console.log(req.user ? 'req.user' : '!req.user');
      res.render('logged-in-logout-poc', { user: req.user });
      console.log('after rendering');
    }
  );

  libs.app.get('/logout',
    function (req, res) {
      req.logout();
      res.redirect('/index.html');
    }
  );

  //
  //// POST requests

  // Users management
  libs.app.post('/login',
    libs.passport.authenticate('local', {
      successRedirect: '/logged-in-logout-poc.html',
      failureRedirect: '/index.html',
    })
  );

  libs.app.post('/sign-up',
    managers.users.createUser({
      successRedirect: '/login-signup-poc.html',
      failureRedirect: '/index.html',
    })
  );
};
