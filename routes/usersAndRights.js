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

const usersAndRightsController = require('../controllers/usersAndRights');

module.exports = function initBaseRoutes(app, conf, passport) {
  //
  // Security gate
  //
  // Check if a user is not logged-in, or logged-in, or logged-in and
  // is an administrator then allow or deny the access to the following routes
  //

  //
  // Middleware for every HTTP request
  // Possible HTTP return code
  //  - 401
  // If the 401 error status is thrown, the JSON response format will be:
  //  - { error: 'error message' }
  // If there is no error
  //  - Nothing happen
  //
  app.all('/api/public/*', usersAndRightsController.ensureLoggedOut);
  app.all('/api/logged-in/*', usersAndRightsController.ensureLoggedIn);
  app.all('/api/logged-in/admin/*', usersAndRightsController.ensureAdminLoggedIn);

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
  app.post('/api/public/user/login', usersAndRightsController.login(passport));

  //
  // POST request form:
  //  - Empty
  // Possible HTTP return codes:
  //  - 200 OK
  //  - 401 Unauthorized
  // JSON response:
  //  - Empty
  //
  app.post('/api/logged-in/user/logout', usersAndRightsController.logout());

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
  app.post('/api/public/user/sign-up', usersAndRightsController.createUser());

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
  app.post('/api/public/user/recover_password', usersAndRightsController.recoverUserPassword());

  //
  // GET request
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
  app.get('/api/logged-in/user/profile', usersAndRightsController.retrieveUserProfile());

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
  app.post('/api/logged-in/user/profile/update', usersAndRightsController.updateUserProfile());

  //
  // Users administration
  //
  app.get('/api/logged-in/admin/users', usersAndRightsController.retrieveAllUsers());

  app.get('/api/logged-in/user', usersAndRightsController.retrieveUser());

  app.post('/api/logged-in/admin/users/create', usersAndRightsController.createUsers());

  app.post('/api/logged-in/admin/users/update', usersAndRightsController.updateUsers());

  app.post('/api/logged-in/admin/users/delete', usersAndRightsController.deleteUsers());

  app.post('/api/logged-in/user/update', usersAndRightsController.updateUser());

  app.post('/api/logged-in/admin/user/delete', usersAndRightsController.deleteUser());

  app.get('/api/logged-in/admin/deamon/connected', usersAndRightsController.getNbrUserConnectedDeamon());

  //
  // Groups administration
  //
  app.get('/api/logged-in/admin/groups', usersAndRightsController.retrieveAllGroups());

  app.get('/api/logged-in/admin/group', usersAndRightsController.retrieveGroup());

  app.post('/api/logged-in/admin/groups/create', usersAndRightsController.createGroups());

  app.post('/api/logged-in/admin/groups/update', usersAndRightsController.updateGroups());

  app.post('/api/logged-in/admin/groups/delete', usersAndRightsController.deleteGroups());

  app.post('/api/logged-in/admin/group/update', usersAndRightsController.updateGroup());

  app.post('/api/logged-in/admin/group/delete', usersAndRightsController.deleteGroup());

  app.post('/api/logged-in/admin/groups/add_users', usersAndRightsController.addUsersToGroup());
};
