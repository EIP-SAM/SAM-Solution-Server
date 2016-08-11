var usersManager = require('../../managers/users');
var groupsManager = require('../../managers/groups');
var usersAndRightsController = require('../../controllers/usersAndRights');

describe('retrieveUserProfile', function () {
  var req = { session: {}, user: { id: 1 } };
  var res = {};
  var user = usersManager.retrieveUserProfile();

  it('should not return null', function () {
    expect(user).not.toBeNull();
  });

  it('should return a function', function () {
    expect(typeof user === 'function').toBeTruthy();
  });

});

describe('retrieveAllUsers', function () {
  var req = { session: {} };
  var res = {};
  var users = usersAndRightsController.retrieveAllUsers(req, res);

  it('should not return null', function () {
    expect(users).not.toBeNull();
  });

  it('should return a function', function () {
    expect(typeof users === 'function').toBeTruthy();
  });

  it('should have called retrieveAllUsers once', function () {
    spyOn(usersManager, 'retrieveAllUsers');
    usersAndRightsController.retrieveAllUsers(req, res);
    expect(usersManager.retrieveAllUsers).toHaveBeenCalledTimes(1);
  });
});

describe('createUser', function () {
  var params;
  var user = usersAndRightsController.createUser(params);

  it('should return a function', function () {
    expect(typeof user === 'function').toBeTruthy();
  });
});

describe('createUsers', function () {
  var params;
  var user = usersAndRightsController.createUsers(params);

  it('should return a function', function () {
    expect(typeof user === 'function').toBeTruthy();
  });
});

describe('updateUserProfile', function () {
  var params;
  var user = usersAndRightsController.updateUserProfile(params);

  it('should return a function', function () {
    expect(typeof user === 'function').toBeTruthy();
  });
});

describe('updateUsers', function () {
  var params;
  var users = usersAndRightsController.updateUsers(params);

  it('should return a function', function () {
    expect(typeof users === 'function').toBeTruthy();
  });
});

describe('deleteUsers', function () {
  var params;
  var user = usersAndRightsController.deleteUsers(params);

  it('should return a function', function () {
    expect(typeof user === 'function').toBeTruthy();
  });
});

describe('retrieveAllGroups', function () {
  var req = { session: {} };
  var res = {};
  var groups = usersAndRightsController.retrieveAllGroups(req, res);

  it('should not return null', function () {
    expect(groups).not.toBeNull();
  });

  it('should return a function', function () {
    expect(typeof groups === 'function').toBeTruthy();
  });
});

describe('updateGroups', function () {
  var params;
  var group = usersAndRightsController.updateGroups(params);

  it('should return a function', function () {
    expect(typeof group === 'function').toBeTruthy();
  });
});

describe('createGroups', function () {
  var params;
  var group = usersAndRightsController.createGroups(params);

  it('should return a function', function () {
    expect(typeof group === 'function').toBeTruthy();
  });
});

describe('deleteGroups', function () {
  var params;
  var group = usersAndRightsController.deleteGroups(params);

  it('should return a function', function () {
    expect(typeof group === 'function').toBeTruthy();
  });
});

describe('addUsersToGroup', function () {
  var params;
  var group = usersAndRightsController.addUsersToGroup(params);

  it('should return a function', function () {
    expect(typeof group === 'function').toBeTruthy();
  });
});
