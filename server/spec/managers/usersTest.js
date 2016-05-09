var Users = require('../../managers/users');

describe("initAdminUser", function() {
  it("should return a users adapter", function() {
    var users = Users.initAdminUser();

    expect(users).not.toBeNull();
    expect('function' === typeof users.then).toBeTruthy();
  })
});

describe("checkNewUserName", function() {
  it("should return", function() {

  })
});

describe("checkNewUserEmail", function() {
  it("should return", function() {

  })
});

describe("checkNewUserPassword", function() {
  it("should return", function() {

  })
});

describe("checkNewUserValues", function() {
  it("should return", function() {

  })
});

describe("checkAndCreateUser", function() {
  it("should return a new promise", function() {
      var name = "admin";
      var email = "test@test.com";
      var password = "qwerty";
      var confirmation = "qwerty";
      var user = Users.checkAndCreateUser(name, email, password, confirmation);

      expect(user).not.toBeNull();
      expect('function' === typeof user.then).toBeTruthy();
  })
});

describe("identifyUser", function() {
  it("should return a new promise", function() {
      var name = "admin";
      var password = "qwerty";
      var user = Users.identifyUser(name, password);

      expect(user).not.toBeNull();
      expect('function' === typeof user.then).toBeTruthy();
  })
});

describe("updateUserProfile", function() {
  it("should return a new promise", function() {
    var userModel;
    var userUpdateRequest;
    var user = Users.updateUserProfile(userModel, userUpdateRequest);

    expect(user).not.toBeNull();
    expect('function' === typeof user.then).toBeTruthy();
  }
});
