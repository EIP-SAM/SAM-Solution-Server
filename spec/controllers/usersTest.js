var usersManager = require('../../managers/users');
var groupsManager = require('../../managers/groups');
var usersController = require('../../controllers/users');

describe('retrieveUserProfile', function () {
  // var req = { session: {} };
  // var res = {};
  // var user = usersController.retrieveUserProfile(req, res);
  //
  // it('should not return null', function () {
  //   expect(user).not.toBeNull();
  // });
  //
  // it('should return a promise', function () {
  //   expect(typeof user.then === 'function').toBeTruthy();
  // });
  //
  // it('should have called retrieveUserProfile once', function () {
  //   spyOn(usersManager, 'retrieveUserProfile');
  //   usersController.retrieveUserProfile(req, res);
  //   expect(usersManager.retrieveUserProfile).toHaveBeenCalledTimes(1);
  // });

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
  var users = usersController.retrieveAllUsers(req, res);

  it('should not return null', function () {
    expect(users).not.toBeNull();
  });

  it('should return a promise', function () {
    expect(typeof users.then === 'function').toBeTruthy();
  });

  it('should have called retrieveAllUsers once', function () {
    spyOn(usersManager, 'retrieveAllUsers');
    usersController.retrieveAllUsers(req, res);
    expect(usersManager.retrieveAllUsers).toHaveBeenCalledTimes(1);
  });
});

describe('createUser', function () {
  var params;
  var user = usersController.createUser(params);

  it('should return a function', function () {
    expect(typeof user === 'function').toBeTruthy();
  });
});

describe('createUsers', function () {
  var params;
  var user = usersController.createUsers(params);

  it('should return a function', function () {
    expect(typeof user === 'function').toBeTruthy();
  });
});

describe('updateUserProfile', function () {
  var params;
  var user = usersController.updateUserProfile(params);

  it('should return a function', function () {
    expect(typeof user === 'function').toBeTruthy();
  });
});

describe('updateUsers', function () {
  var params;
  var users = usersController.updateUsers(params);

  it('should return a function', function () {
    expect(typeof users === 'function').toBeTruthy();
  });
});

describe('deleteUsers', function () {
  var params;
  var user = usersController.deleteUsers(params);

  it('should return a function', function () {
    expect(typeof user === 'function').toBeTruthy();
  });
});

describe('retrieveAllGroups', function () {
  var req = { session: {} };
  var res = {};
  var groups = usersController.retrieveAllGroups(req, res);

  it('should not return null', function () {
    expect(groups).not.toBeNull();
  });

  it('should return a promise', function () {
    expect(typeof groups.then === 'function').toBeTruthy();
  });

  it('should have called retrieveAllGroups once', function () {
    spyOn(groupsManager, 'retrieveAllGroups');
    usersController.retrieveAllGroups(req, res);
    expect(groupsManager.retrieveAllGroups).toHaveBeenCalledTimes(1);
  });
});

describe('updateGroups', function () {
  var params;
  var group = usersController.updateGroups(params);

  it('should return a function', function () {
    expect(typeof group === 'function').toBeTruthy();
  });
});

describe('createGroups', function () {
  var params;
  var group = usersController.createGroups(params);

  it('should return a function', function () {
    expect(typeof group === 'function').toBeTruthy();
  });
});

describe('deleteGroups', function () {
  var params;
  var group = usersController.deleteGroups(params);

  it('should return a function', function () {
    expect(typeof group === 'function').toBeTruthy();
  });
});

describe('addUsersToGroup', function () {
  var params;
  var group = usersController.addUsersToGroup(params);

  it('should return a function', function () {
    expect(typeof group === 'function').toBeTruthy();
  });
});
