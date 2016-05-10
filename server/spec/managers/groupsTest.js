var groupsManager = require("../../managers/groups");

describe("initUserDefaultGroup", function() {
  var group = groupsManager.initUserDefaultGroup();

  it("should not return null", function() {
    expect(group).not.toBeNull();
  })

  it("should return a promise", function() {
    expect('function' === typeof group.then).toBeTruthy();
  })
});

describe("initAdminDefaultGroup", function() {
  var group = groupsManager.initUserDefaultGroup();

  it("should not return null", function() {
    expect(group).not.toBeNull();
  })

  it("should return a promise", function() {
    expect('function' === typeof group.then).toBeTruthy();
  })
