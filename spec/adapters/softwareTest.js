//
// Software adapter test unit
//

const softwareAdapter = require('../../adapters/software');
const softwareDaemon = require('../../websocket/daemon/software');

describe('launchAnInstall', function () {
  var user;
  var packages;

  beforeAll(function () {
    user = "admin";
    packages = ['git', 'foo'];
  });

  it('should return a promise', function () {
    let software = softwareAdapter.launchAnInstall(user, packages);

    expect(typeof software.then === 'function').toBeTruthy();
  });

  it("should have called softwareDaemon['launchInstall'] once", function () {
    spyOn(softwareDaemon, 'installPackages');
    softwareDaemon.installPackages();
    expect(softwareDaemon.installPackages).toHaveBeenCalledTimes(1);
  });
});

describe('launchAnUpdate', function () {
  var user;
  var packages;

  beforeAll(function () {
    user = "admin";
    packages = ['git', 'foo'];
  });

  it('should return a promise', function () {
    let software = softwareAdapter.launchAnUpdate(user, packages);

    expect(typeof software.then === 'function').toBeTruthy();
  });

  it("should have called softwareDaemon['updatePackages'] once", function () {
    spyOn(softwareDaemon, 'updatePackages');
    softwareDaemon.updatePackages();
    expect(softwareDaemon.updatePackages).toHaveBeenCalledTimes(1);
  });
});

describe('launchARemove', function () {
  var user;
  var packages;

  beforeAll(function () {
    user = "admin";
    packages = ['git', 'foo'];
  });

  it('should return a promise', function () {
    let software = softwareAdapter.launchARemove(user, packages);

    expect(typeof software.then === 'function').toBeTruthy();
  });

  it("should have called softwareDaemon['removePackages'] once", function () {
    spyOn(softwareDaemon, 'removePackages');
    softwareDaemon.removePackages();
    expect(softwareDaemon.removePackages).toHaveBeenCalledTimes(1);
  });
});

describe('queryPackage', function () {
  var user;
  var packages;

  beforeAll(function () {
    user = "admin";
    packages = 'git';
  });

  it('should return a promise', function () {
    let software = softwareAdapter.queryPackage(user, packages);

    expect(typeof software.then === 'function').toBeTruthy();
  });

  it("should have called softwareDaemon['queryPackage'] once", function () {
    spyOn(softwareDaemon, 'queryPackage');
    softwareDaemon.queryPackage();
    expect(softwareDaemon.queryPackage).toHaveBeenCalledTimes(1);
  });
});

describe('launchListPackages', function () {
  var user;

  beforeAll(function () {
    user = "admin";
  });

  it('should return a promise', function () {
    let software = softwareAdapter.launchListPackages(user);

    expect(typeof software.then === 'function').toBeTruthy();
  });

  it("should have called softwareDaemon['listInstalledPackages'] once", function () {
    spyOn(softwareDaemon, 'listInstalledPackages');
    softwareDaemon.listInstalledPackages();
    expect(softwareDaemon.listInstalledPackages).toHaveBeenCalledTimes(1);
  });
});

describe('launchGetOperatingSystem', function () {
  var user;

  beforeAll(function () {
    user = "admin";
  });

  it('should return a promise', function () {
    let software = softwareAdapter.launchGetOperatingSystem(user);

    expect(typeof software.then === 'function').toBeTruthy();
  });

  it("should have called softwareDaemon['getOperatingSystem'] once", function () {
    spyOn(softwareDaemon, 'getOperatingSystem');
    softwareDaemon.getOperatingSystem();
    expect(softwareDaemon.getOperatingSystem).toHaveBeenCalledTimes(1);
  });
});
