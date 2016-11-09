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

module.exports.launchAnInstall = function (user, package) {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.installPackages(user, package, onStatusChange)
    .then(function (returnStatus) {
      fulfill(returnStatus);
    }).catch(function (error) {
      reject(error);
    });
  });
}

module.exports.launchAnUpdate = function (user, package) {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.updatePackages(user, package, onStatusChange)
    .then(function (returnStatus) {
      fulfill(returnStatus);
    }).catch(function (error) {
      reject(error);
    });
  });
}

module.exports.launchARemove = function (user, package) {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.removePackages(user, package, onStatusChange)
    .then(function (returnStatus) {
      fulfill(returnStatus);
    }).catch(function (error) {
      reject(error);
    });
  });
}

module.exports.launchAQuery = function (user, package) {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.queryPackage(user, package, onStatusChange)
    .then(function (returnStatus) {
      fulfill(returnStatus);
    }).catch(function (error) {
      reject(error);
    });
  });
}

module.exports.launchListPackages = function (user) {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.listInstalledPackages(user, onStatusChange)
    .then(function (returnStatus) {
      fulfill(returnStatus);
    }).catch(function (error) {
      reject(error);
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
