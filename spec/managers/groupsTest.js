var groupsManager = require("../../managers/groups");
var groupsAdapter = require("../../adapters/groups")

/*
describe("initUserDefaultGroup", function() {
  var group = groupsManager.initUserDefaultGroup();

  it("should not return null", function() {
    expect(group).not.toBeNull();
  });

  it("should return a promise", function() {
    expect('function' === typeof group.then).toBeTruthy();
  });
});
*/

/*
describe("initAdminDefaultGroup", function() {
  var group = groupsManager.initAdminDefaultGroup();

  it("should not return null", function() {
    expect(group).not.toBeNull();
  });

  it("should return a promise", function() {
    expect('function' === typeof group.then).toBeTruthy();
  });
});
*/

 /*
describe("newGroupIsInvalid", function() {
  var group = {name : "admin", saveAndRestoreMode : 1, migrationMode : 1, softwarePackagesMode : 1};
  var res = groupsManager.newGroupIsInvalid(group);

  it("should return null", function() {
    expect(res).toBeNull();
  });
});
*/

/*
describe("createGroup", function() {
  var group = {name : "admin", saveAndRestoreMode : 1, migrationMode : 1, softwarePackagesMode : 1};
  var res = groupsManager.createGroup(group);

  it("should not return null", function() {
    expect(res).not.toBeNull();
  });

  it("should return a promise", function() {
    expect('function' === typeof res.then).toBeTruthy();
  });

  it("should have called findByName once", function() {
    spyOn(groupsAdapter, 'findByName');
    groupsManager.createGroup(group);
    expect(groupsAdapter.findByName).toHaveBeenCalledTimes(1);
  });
});
*/

describe("retrieveAllGroups", function() {
  var req = {session : {}};
  var res = {};
  var groups = groupsManager.retrieveAllGroups(req, res);

  it("should not return null", function() {
    expect(groups).not.toBeNull();
  });

  it("should return a promise", function() {
    expect('function' === typeof groups.then).toBeTruthy();
  });

  it("should have called findAll once", function() {
    spyOn(groupsAdapter, 'findAll');
    groupsManager.retrieveAllGroups(req, res);
    expect(groupsAdapter.findAll).toHaveBeenCalledTimes(1);
  });
});

describe("updateGroups", function() {
  var params;
  var group = groupsManager.updateGroups(params);

  it("should return a function", function() {
    expect('function' === typeof group).toBeTruthy();
  });
});

describe("createGroups", function() {
  var params;
  var group = groupsManager.createGroups(params);

  it("should return a function", function() {
    expect('function' === typeof group).toBeTruthy();
  });
});

describe("deleteGroups", function() {
  var params;
  var group = groupsManager.deleteGroups(params);

  it("should return a function", function() {
    expect('function' === typeof group).toBeTruthy();
  });
});

describe("addUsersToGroup", function() {
  var params;
  var group = groupsManager.addUsersToGroup(params);

  it("should return a function", function() {
    expect('function' === typeof group).toBeTruthy();
  });
});
