var Groups = require("../../managers/groups");

describe("initUserDefaultGroup", function() {
  it("should return a groups adapter", function() {
    var group = Groups.initUserDefaultGroup();

    expect(group).not.toBeNull();
    expect('function' === typeof group.then).toBeTruthy();
  })
});

describe("initAdminDefaultGroup", function() {
  it("should return a groups adapter", function() {
    var group = Groups.initAdminDefaultGroup();

  })
  expect(group).not.toBeNull();
  expect('function' === typeof group.then).toBeTruthy();
});

describe("retrieveAllGroups", function() {
  it("should return a new promise", function() {
    var req;
    var res;
    var groups = Groups.retrieveAllGroups(req, res);

    expect(groups).not.toBeNull();
    expect('function' === typeof groups.then).toBeTruthy();
});
