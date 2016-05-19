var usersManager = require('../../managers/users');
var usersAdapter = require('../../adapters/users');

/*
describe("initAdminUser", function() {
  var users = usersManager.initAdminUser();

  it("should not return null", function() {
    expect(users).not.toBeNull();
  });

  it("should return a promise", function() {
    expect('function' === typeof users.then).toBeTruthy();
  });
});
*/

/*
describe("checkNewUserName", function() {
  var user1 = usersManager.checkNewUserName(null);
  var user2 = usersManager.checkNewUserName("");
  var user3 = usersManager.checkNewUserName("foo bar");

  it("should return \'Empty user name\'", function() {
      expect(user1).toEqual('Empty user name');
  });

  it("should return \'Empty user name\'", function() {
    expect(user2).toEqual('Empty user name');
  });

  it("should return null", function() {
    expect(user3).toBeNull();
  });
});
*/

/*
describe("checkNewUserEmail", function() {
  var mail1 = usersManager.checkNewUserEmail(null);
  var mail2 = usersManager.checkNewUserEmail("");
  var mail3 = usersManager.checkNewUserEmail("foo bar");

  it("should return \'Invalid user email\'", function() {
      expect(mail1).toEqual('Invalid user email');
  });

  it("should return \'Invalid user email\'", function() {
    expect(mail2).toEqual('Invalid user email');
  });

  it("should return null", function() {
    expect(mail3).toBeNull();
  });
});
*/

/*
describe("checkNewUserPassword", function() {
  var password1 = usersManager.checkNewUserEmail(null, null);
  var password2 = usersManager.checkNewUserEmail("", "");
  var password3 = usersManager.checkNewUserEmail("foo bar", "foo bar");

  it("should return \'Invalid user password/confirmation\'", function() {
      expect(password1).toEqual('Invalid user password/confirmation');
  });

  it("should return \'Invalid user password/confirmation\'", function() {
    expect(password2).toEqual('Invalid user password/confirmation');
  });

  it("should return null", function() {
    expect(password3).toBeNull();
  });
});
*/

/*
describe("checkNewUserValues", function() {
  var user = usersManager.checkNewUserValues("name", "test@test.com", "qwerty", "qwerty");

  it("should return null", function() {
    expect(user).toBeNull();
  });

  it("should have called checkNewUserName once", function() {
    spyOn(usersManager, 'checkNewUserName');
    usersManager.checkNewUserValues("name", "test@test.com", "qwerty", "qwerty");
    expect(usersManager.checkNewUserName).toHaveBeenCalledTimes(1);
  });

  it("should have called checkNewUserEmail once", function() {
    spyOn(usersManager, 'checkNewUserEmail');
    usersManager.checkNewUserValues("name", "test@test.com", "qwerty", "qwerty");
    expect(usersManager.checkNewUserEmail).toHaveBeenCalledTimes(1);
  });

  it("should have called checkNewUserPassword once", function() {
    spyOn(usersManager, 'checkNewUserPassword');
    usersManager.checkNewUserValues("name", "test@test.com", "qwerty", "qwerty");
    expect(usersManager.checkNewUserPassword).toHaveBeenCalledTimes(1);
  });
});
*/

/*
describe("checkAndCreateUser", function() {
  var name = "admin";
  var email = "test@test.com";
  var password = "qwerty";
  var confirmation = "qwerty";
  var user = usersManager.checkAndCreateUser(name, email, password, confirmation);

  it("should not return null", function() {
    expect(user).not.toBeNull();
  });

  it("should return a new promise", function() {
      expect('function' === typeof user.then).toBeTruthy();
  });

  it("should have called findByEmail once", function() {
    spyOn(usersAdapter, 'findByEmail');
    usersManager.checkAndCreateUser(name, email, password, confirmation);
    expect(usersAdapter.findByEmail).toHaveBeenCalledTimes(1);
  });
});
*/

describe("createUser", function() {
  var params;
  var user = usersManager.createUser(params);

  it("should return a function", function() {
    expect('function' === typeof user).toBeTruthy();
  });
});

describe("identifyUser", function() {
  var name = "admin";
  var password = "qwerty";
  var user = usersManager.identifyUser(name, password);
  it("should not return null", function() {
    expect(user).not.toBeNull();
  });

  it("should return a promise", function() {
    expect('function' === typeof user.then).toBeTruthy();
  });

  it("should have called findByName once", function() {
    spyOn(usersAdapter, 'findByName');
    usersManager.identifyUser(name, password);
    expect(usersAdapter.findByName).toHaveBeenCalledTimes(1);
  });
});

describe("retrieveAllUsers", function() {
  var req = {session : {}};
  var res = {};
  var users = usersManager.retrieveAllUsers(req, res);

  it("should not return null", function() {
    expect(users).not.toBeNull();
  });

  it("should return a promise", function() {
    expect('function' === typeof users.then).toBeTruthy();
  });

  it("should have called findAll once", function() {
    spyOn(usersAdapter, 'findAll');
    usersManager.retrieveAllUsers(req, res);
    expect(usersAdapter.findAll).toHaveBeenCalledTimes(1);
  });
});

describe("retrieveUserProfile", function() {
  var req = {session : {}};
  var res = {};
  var user = usersManager.retrieveUserProfile(req, res);

  it("should not return null", function() {
    expect(user).not.toBeNull();
  });

  it("should return a promise", function() {
    expect('function' === typeof user.then).toBeTruthy();
  });

  it("should have called findById once", function() {
    spyOn(usersAdapter, 'findById');
    usersManager.retrieveUserProfile(req, res).then(function() {
      expect(usersAdapter.findById).toHaveBeenCalledTimes(1);
    });
  });
});

/*
describe("updateUserProfile", function() {
  var userModel = usersAdapter.createUser("admin", "test@test.com", "qwerty");
  var userUpdateRequest = {};
  var user = usersManager.updateUserProfile(userModel, userUpdateRequest);

  it("should not return null", function() {
    expect(user).not.toBeNull();
  });

  it("should return a promise", function() {
    expect('function' === typeof user.then).toBeTruthy();
  });
});
*/

describe("updateUserProfile", function() {
  var params;
  var user = usersManager.updateUserProfile(params);

  it("should return a function", function() {
    expect('function' === typeof user).toBeTruthy();
  });
});

describe("updateUsers", function() {
  var params;
  var users = usersManager.updateUsers(params);

  it("should return a function", function() {
    expect('function' === typeof users).toBeTruthy();
  });
});

describe("createUsers", function() {
  var params;
  var user = usersManager.createUsers(params);

  it("should return a function", function() {
    expect('function' === typeof user).toBeTruthy();
  });
});

describe("deleteUsers", function() {
  var params;
  var user = usersManager.deleteUsers(params);

  it("should return a function", function() {
    expect('function' === typeof user).toBeTruthy();
  });
});
