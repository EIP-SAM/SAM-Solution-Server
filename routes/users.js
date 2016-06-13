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

  //
  // Possible HTTP return codes:
  //  - 200 OK
  //  - 401 Unauthorized
  //  - 500 Internal server error
  // Possible JSON responses:
  //  - 200: { username: 'noel_flantier', email: 'e@ma.il',
  //           saveAndRestoreMode: 1, migrationMode: 1, softwarePackagesMode: 2,
  //           groups: [
  //             { name: 'group1', saveAndRestoreMode: 1, migrationMode: 1, softwarePackagesMode: 1 },
  //             { name: 'group2', saveAndRestoreMode: 1, migrationMode: 1, softwarePackagesMode: 2 },
  //           ]
  //         }
  //  - 401/500: { error: 'error message' }
  //
  app.get('/users_and_rights/user_profile',
    usersAndRightsController.retrieveUserProfile()
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

  //
  // POST request form:
  //  - { username: 'username', password: 'password' }
  // Possible HTTP return codes:
  //  - 200 OK
  //  - 401 Unauthorized
  //  - 500 Internal server error
  // Possible JSON responses:
  //  - 200: { username: 'noel_flantier', email: 'e@ma.il',
  //           saveAndRestoreMode: 1, migrationMode: 1, softwarePackagesMode: 2,
  //           groups: [
  //             { name: 'group1', saveAndRestoreMode: 1, migrationMode: 1, softwarePackagesMode: 1 },
  //             { name: 'group2', saveAndRestoreMode: 1, migrationMode: 1, softwarePackagesMode: 2 },
  //           ]
  //         }
  //  - 401/500: { error: 'error message' }
  //
  app.post('/users_and_rights/login',
    usersAndRightsController.login(passport)
  );

  //
  // POST request form:
  //  - Empty
  // Possible HTTP return codes:
  //  - 200 OK
  //  - 405 Method not allowed
  // JSON response:
  //  - Empty
  //
  app.post('/users_and_rights/logout',
    usersAndRightsController.logout()
  );

  //
  // POST request form:
  //  - { username: 'noel_flantier', email: 'e@ma.il', password: 'password', confirmation: 'password' }
  // Possible HTTP return codes:
  //  - 200 OK
  //  - 401 Unauthorized
  //  - 405 Method not allowed
  //  - 500 Internal server error
  // Possible JSON responses:
  //  - 200: { success: 'success message' }
  //  - 401/405/500: { error: 'error message' }
  //
  app.post('/users_and_rights/sign-up',
    usersAndRightsController.createUser()
  );

  //
  // POST request form:
  //  - { email: 'e@ma.il' }
  // Possible HTTP return codes:
  //  - 200 OK
  //  - 401 Unauthorized
  //  - 405 Method not allowed
  //  - 500 Internal server error
  // Possible JSON responses:
  //  - 200: { success: 'success message' }
  //  - 401/405/500: { error: 'error message' }
  //
  app.post('/users_and_rights/recover_user_password',
    usersAndRightsController.recoverUserPassword()
  );

  //
  // POST request form:
  //  - { username: 'noel_flantier', email: 'e@ma.il', password: 'password', confirmation: 'password' }
  // Possible HTTP return codes:
  //  - 200 OK
  //  - 401 Unauthorized
  //  - 405 Method not allowed
  // Possible JSON responses:
  //  - 200: { success: 'success message' }
  //  - 401/405: { error: 'error message' }
  //
  app.post('/users_and_rights/update_user_profile',
    usersAndRightsController.updateUserProfile()
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
