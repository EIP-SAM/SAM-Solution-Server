var Groups = require('../../adapters/groups');

describe("findAll", function() {
  it("should return an array of groups model", function() {
    var groups = Groups.findAll();

    expect(groups).not.toBeNull();
    expect('function' === typeof groups.then).toBeTruthy();
  })
});

describe("findById", function() {
  it("should return a groups model", function() {
    var id = 0;
    var group = Groups.findById(id);

    expect(group).not.toBeNull();
    expect('function' === typeof group.then).toBeTruthy();
  })
});

describe("findByName", function() {
  it("should return a groups model", function() {
    var name = "admin";
    var group = Groups.findByName(name);

    expect(group).not.toBeNull();
    expect('function' === typeof group.then).toBeTruthy();
  })
});

describe("createGroup", function() {
  it("Should return a groups model", function() {
    var name = "admin";
    var rights = "rights";
    var group = Groups.createGroup(name, rights);

    expect(group).not.toBeNull();
    expect('function' === typeof group.then).toBeTruthy();
  })
});
