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

const ensureLoggedIn = require('../libs/connectEnsureLogin').ensureLoggedIn;
const ensureLoggedOut = require('../libs/connectEnsureLogin').ensureLoggedOut;

const usersAndRightsController = require('../controllers/users');

module.exports = function initBaseRoutes(app, conf, passport) {
  //
  //// GET requests

  //
  // Users management
  //
  app.get('/users_and_rights/login_signup',
    ensureLoggedOut('/users_and_rights/logged_in'),
    function (req, res) {
      res.render('users_and_rights/login_signup');
    }
  );

  app.get('/users_and_rights/logged_in',
    ensureLoggedIn('/users_and_rights/login_signup'),
    function (req, res) {
      res.render('users_and_rights/logged_in', { user: req.user });
    }
  );

  app.get('/users_and_rights/user_profile',
  ensureLoggedIn('/users_and_rights/login_signup'),
    function (req, res) {
      usersAndRightsController.retrieveUserProfile(req, res)
      .then(function (data) {
        res.render('users_and_rights/user_profile', data);
      });
    }
  );

  app.get('/users_and_rights/users_administration',
  ensureLoggedIn('/users_and_rights/login_signup'),
    function (req, res) {
      usersAndRightsController.retrieveAllUsers(req, res)
      .then(function (data) {
        res.render('users_and_rights/users_administration', data);
      });
    }
  );

  app.get('/users_and_rights/logout',
    function (req, res) {
      req.logout();
      req.session.save(function () {
        res.redirect('/users_and_rights/login_signup');
      });
    }
  );

  //
  // Groups management
  //
  app.get('/users_and_rights/groups_administration',
  ensureLoggedIn('/users_and_rights/login_signup'),
    function (req, res) {
      usersAndRightsController.retrieveAllGroups(req, res)
      .then(function (data) {
        res.render('users_and_rights/groups_administration', data);
      });
    }
  );

  //
  //// POST requests

  //
  // Users management
  //
  app.post('/users_and_rights/login',
    passport.authenticate('local', { failureRedirect: '/users_and_rights/login_signup' }),
    function (req, res) {
      req.session.save(function () {
        res.redirect('/users_and_rights/logged_in');
      });
    }
  );

  app.post('/users_and_rights/sign-up',
    usersAndRightsController.createUser({
      successRedirect: '/users_and_rights/login_signup',
      failureRedirect: '/users_and_rights/login_signup',
    })
  );

  app.post('/users_and_rights/recover_user_password',
    usersAndRightsController.recoverUserPassword({
      successRedirect: '/users_and_rights/login_signup',
      failureRedirect: '/users_and_rights/login_signup',
    })
  );

  app.post('/users_and_rights/update_user_profile',
    usersAndRightsController.updateUserProfile({
      successRedirect: '/users_and_rights/user_profile',
      failureRedirect: '/users_and_rights/user_profile',
    })
  );

  app.post('/users_and_rights/update_users',
    usersAndRightsController.updateUsers({
      successRedirect: '/users_and_rights/users_administration',
      failureRedirect: '/users_and_rights/users_administration',
    })
  );

  app.post('/users_and_rights/create_users',
    usersAndRightsController.createUsers({
      successRedirect: '/users_and_rights/users_administration',
      failureRedirect: '/users_and_rights/users_administration',
    })
  );

  app.post('/users_and_rights/delete_users',
    usersAndRightsController.deleteUsers({
      successRedirect: '/users_and_rights/users_administration',
      failureRedirect: '/users_and_rights/users_administration',
    })
  );

  //
  // Groups management
  //
  app.post('/users_and_rights/update_groups',
    usersAndRightsController.updateGroups({
      successRedirect: '/users_and_rights/groups_administration',
      failureRedirect: '/users_and_rights/groups_administration',
    })
  );

  app.post('/users_and_rights/create_groups',
    usersAndRightsController.createGroups({
      successRedirect: '/users_and_rights/groups_administration',
      failureRedirect: '/users_and_rights/groups_administration',
    })
  );

  app.post('/users_and_rights/delete_groups',
    usersAndRightsController.deleteGroups({
      successRedirect: '/users_and_rights/groups_administration',
      failureRedirect: '/users_and_rights/groups_administration',
    })
  );

  app.post('/users_and_rights/add_users_to_group',
    usersAndRightsController.addUsersToGroup({
      successRedirect: '/users_and_rights/groups_administration',
      failureRedirect: '/users_and_rights/groups_administration',
    })
  );
};
