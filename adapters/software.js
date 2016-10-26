const softwareDaemon = require('../daemon/software');

//
// Software daemon usage example
// Replace 'grenadingue' by your user name if you want to use this sample code
//

//
// is called when the command has been started on the daemon
// is passed to each softwareDaemon call
//
function onStatusChange(status) {
  console.log('status changed:', status);
}

module.exports.launchAnInstall = function () {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.installPackages('admin', ['foo', 'bar', 'baz'], onStatusChange)
    .then(function (returnStatus) {
      console.log(returnStatus);
    }).catch(function (error) {
      console.log(error);
    });
  });
}

module.exports.launchAnUpdate = function () {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.updatePackages('admin', ['foo', 'bar', 'baz'], onStatusChange)
    .then(function (returnStatus) {
      console.log(returnStatus);
    }).catch(function (error) {
      console.log(error);
    });
  });
}

module.exports.launchARemove = function () {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.removePackages('admin', ['foo', 'bar', 'baz'], onStatusChange)
    .then(function (returnStatus) {
      console.log(returnStatus);
    }).catch(function (error) {
      console.log(error);
    });
  });
}

module.exports.launchAQuery = function () {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.queryPackage('admin', 'foo', onStatusChange)
    .then(function (returnStatus) {
      console.log(returnStatus);
    }).catch(function (error) {
      console.log(error);
    });
  });
}

module.exports.launchListPackages = function () {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.listInstalledPackages('admin', onStatusChange)
    .then(function (returnStatus) {
      console.log(returnStatus);
    }).catch(function (error) {
      console.log(error);
    });
  });
}

module.exports.launchGetOperatingSystem = function (user) {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.getOperatingSystem(user, onStatusChange)
    .then(function (returnStatus) {
      fulfill(returnStatus);
    }).catch(function (error) {
      reject(error);
    });
  });
}



setTimeout(module.exports.launchAnInstall, 4 * 1000);
setTimeout(module.exports.launchAnUpdate, 6 * 1000);
setTimeout(module.exports.launchARemove, 8 * 1000);
setTimeout(module.exports.launchAQuery, 10 * 1000);
setTimeout(module.exports.launchListPackages, 12 * 1000);
setTimeout(module.exports.launchGetOperatingSystem, 14 * 1000);
