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

const ensureLoggedIn = require('../libs/connectEnsureLogin').ensureLoggedIn;
const ensureLoggedOut = require('../libs/connectEnsureLogin').ensureLoggedOut;

const usersManager = require('../managers/users');
const groupsManager = require('../managers/groups');

module.exports = function initBaseRoutes(app, conf, passport) {
  //
  //// GET requests

  // Users management
  app.get('/login-signup-poc.html',
    ensureLoggedOut('/logged-in-logout-poc.html'),
    function (req, res) {
      res.render('login-signup-poc');
    }
  );

  app.get('/logged-in-logout-poc.html',
    ensureLoggedIn('/login-signup-poc.html'),
    function (req, res) {
      res.render('logged-in-logout-poc', { user: req.user });
    }
  );

  app.get('/users_and_rights/user_profile.html',
    ensureLoggedIn('/login-signup-poc.html'),
    function (req, res) {
      usersManager.retrieveUserProfile(req, res)
      .then(function (data) {
        res.render('users_and_rights/user_profile', data);
      });
    }
  );

  app.get('/users_and_rights/users.html',
    ensureLoggedIn('/login-signup-poc.html'),
    function (req, res) {
      usersManager.retrieveAllUsers(req, res)
      .then(function (data) {
        res.render('users_and_rights/users', data);
      });
    }
  );

  app.get('/logout',
    function (req, res) {
      req.logout();
      req.session.save(function () {
        res.redirect('/index.html');
      });
    }
  );

  // Groups management
  app.get('/users_and_rights/groups.html',
    ensureLoggedIn('/login-signup-poc.html'),
    function (req, res) {
      groupsManager.retrieveAllGroups(req, res)
      .then(function (groups) {
        res.render('users_and_rights/groups', { groups: groups });
      });
    }
  );

  //
  //// POST requests

  // Users management
  app.post('/login',
    passport.authenticate('local', { failureRedirect: '/index.html' }),
    function (req, res) {
      req.session.save(function () {
        res.redirect('/logged-in-logout-poc.html');
      });
    }
  );

  app.post('/sign-up',
    usersManager.createUser({
      successRedirect: '/login-signup-poc.html',
      failureRedirect: '/index.html',
    })
  );

  app.post('/update_user_profile',
    usersManager.updateUserProfile({
      successRedirect: '/users_and_rights/user_profile.html',
      failureRedirect: '/users_and_rights/user_profile.html',
    })
  );

  app.post('/users_and_rights/update_users',
    usersManager.updateUsers({
      successRedirect: '/users_and_rights/users.html',
      failureRedirect: '/index.html',
    })
  );

  app.post('/users_and_rights/create_users',
    usersManager.createUsers({
      successRedirect: '/users_and_rights/users.html',
      failureRedirect: '/index.html',
    })
  );

  app.post('/users_and_rights/delete_users',
    usersManager.deleteUsers({
      successRedirect: '/users_and_rights/users.html',
      failureRedirect: '/index.html',
    })
  );

  // Groups management
  app.post('/users_and_rights/update_groups',
    groupsManager.updateGroups({
      successRedirect: '/users_and_rights/groups.html',
      failureRedirect: '/index.html',
    })
  );

  app.post('/users_and_rights/create_groups',
    groupsManager.createGroups({
      successRedirect: '/users_and_rights/groups.html',
      failureRedirect: '/index.html',
    })
  );

  app.post('/users_and_rights/delete_groups',
    groupsManager.deleteGroups({
      successRedirect: '/users_and_rights/groups.html',
      failureRedirect: '/index.html',
    })
  );
};
