var Users = require('../../adapters/users');

describe("findAll", function() {
  it("should return an array of users model", function() {
    var users = Users.findAll();

    expect(users).not.toBeNull();
    expect('function' === typeof users.then).toBeTruthy();
  })
});

describe("findById", function() {
  it("should return a users model", function() {
    var id = 0;
    var user = Users.findById(id);

    expect(user).not.toBeNull();
    expect('function' === typeof user.then).toBeTruthy();
  })
});

describe("findByName", function() {
  it("should return a users model", function() {
    var name = "admin";
    var user = Users.findByName(name);

    expect(user).not.toBeNull();
    expect('function' === typeof user.then).toBeTruthy();
  })
});

describe("findByEmail", function() {
  it("should return a users model", function() {
    var email = "test@test.com";
    var user = Users.findByEmail(email);

    expect(user).not.toBeNull();
    expect('function' === typeof user.then).toBeTruthy();
  })
});

describe("createUser", function() {
  it("should return a users model", function() {
    var name = "admin";
    var email = "test@test.com";
    var password = "qwerty";
    var user = Users.createUser(name, email, password);

    expect(user).not.toBeNull();
    expect('function' === typeof user.then).toBeTruthy();
  })
});
