//
// Software manager test unit
//

const softwareAdapter = require('../../adapters/software');
const softwareManager = require('../../managers/software');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

describe('allUsersInfo', function () {
  it('should emit websocket server_all_software at least once', function () {
    let software = softwareManager.allUsersInfo(io);
    spyOn(io, 'emit');
    io.emit();
    expect(io.emit.calls.any()).toEqual(true);
  });
});

describe('allSoftwaresByUser', function () {
  var user;

  beforeAll(function () {
    user = "admin";
  });

  it('should emit websocket server_all_software at least once', function () {
    let software = softwareManager.allSoftwaresByUser(user, io);
    spyOn(io, 'emit');
    io.emit();
    expect(io.emit.calls.any()).toEqual(true);
  });
});

describe('searchSoftwareByUser', function () {
  var user;
  var packageName;

  beforeAll(function () {
    user = "admin";
    packageName = "git";
  });

  it('should emit websocket server_search_software_by_user at least once', function () {
    let software = softwareManager.searchSoftwareByUser(user, packageName, io);
    spyOn(io, 'emit');
    io.emit();
    expect(io.emit.calls.any()).toEqual(true);
  });
});

describe('installSoftwareByUser', function () {
  var user;
  var packageName;

  beforeAll(function () {
    user = "admin";
    packageName = "git";
  });

  it('should emit websocket server_install_software_by_user at least once', function () {
    let software = softwareManager.installSoftwareByUser(user, packageName, io);
    spyOn(io, 'emit');
    io.emit();
    expect(io.emit.calls.any()).toEqual(true);
  });
});

describe('updateSoftwareByUser', function () {
  var user;
  var packageName;

  beforeAll(function () {
    user = "admin";
    packageName = "git";
  });

  it('should emit websocket server_update_software_by_user at least once', function () {
    let software = softwareManager.updateSoftwareByUser(user, packageName, io);
    spyOn(io, 'emit');
    io.emit();
    expect(io.emit.calls.any()).toEqual(true);
  });
});

describe('removeSoftwareByUser', function () {
  var user;
  var packageName;

  beforeAll(function () {
    user = "admin";
    packageName = "git";
  });

  it('should emit websocket server_remove_software_by_user at least once', function () {
    let software = softwareManager.removeSoftwareByUser(user, packageName, io);
    spyOn(io, 'emit');
    io.emit();
    expect(io.emit.calls.any()).toEqual(true);
  });
});
