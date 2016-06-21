var usersManager = require('../../managers/users');
var usersAdapter = require('../../adapters/users');

describe('createUser', function () {
  var params;
  var user = usersManager.createUser(params);

  it('should return a function', function () {
    expect(typeof user === 'function').toBeTruthy();
  });
});

describe('identifyUser', function () {
  var name = 'admin';
  var password = 'qwerty';
  var user = usersManager.identifyUser(name, password);
  it('should not return null', function () {
    expect(user).not.toBeNull();
  });

  it('should return a promise', function () {
    expect(typeof user.then === 'function').toBeTruthy();
  });

  it('should have called findByName once', function () {
    spyOn(usersAdapter, 'findByName');
    usersManager.identifyUser(name, password);
    expect(usersAdapter.findByName).toHaveBeenCalledTimes(1);
  });
});

describe('retrieveAllUsers', function () {
  var req = { session: {} };
  var res = {};
  var users = usersManager.retrieveAllUsers(req, res);

  it('should not return null', function () {
    expect(users).not.toBeNull();
  });

  it('should return a promise', function () {
    expect(typeof users.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(usersAdapter, 'findAll');
    usersManager.retrieveAllUsers(req, res);
    expect(usersAdapter.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('retrieveUserProfile', function () {
  var req = { session: {} };
  var res = {};
  var user = usersManager.retrieveUserProfile(req, res);

  it('should not return null', function () {
    expect(user).not.toBeNull();
  });

  it('should return a promise', function () {
    expect(typeof user.then === 'function').toBeTruthy();
  });

  it('should have called findById once', function () {
    spyOn(usersAdapter, 'findById');
    usersManager.retrieveUserProfile(req, res).then(function () {
      expect(usersAdapter.findById).toHaveBeenCalledTimes(1);
    });
  });
});

describe('updateUserProfile', function () {
  var params;
  var user = usersManager.updateUserProfile(params);

  it('should return a function', function () {
    expect(typeof user === 'function').toBeTruthy();
  });
});

describe('updateUsers', function () {
  var params;
  var users = usersManager.updateUsers(params);

  it('should return a function', function () {
    expect(typeof users === 'function').toBeTruthy();
  });
});

describe('createUsers', function () {
  var params;
  var user = usersManager.createUsers(params);

  it('should return a function', function () {
    expect(typeof user === 'function').toBeTruthy();
  });
});

describe('deleteUsers', function () {
  var params;
  var user = usersManager.deleteUsers(params);

  it('should return a function', function () {
    expect(typeof user === 'function').toBeTruthy();
  });
});
