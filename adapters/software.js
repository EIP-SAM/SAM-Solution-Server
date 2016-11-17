const softwareDaemon = require('../websocket/daemon/software');

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
  return callSoftWareDaemonWithPackage(user, package, "installPackages");
}

module.exports.launchAnUpdate = function (user, package) {
  return callSoftWareDaemonWithPackage(user, package, "updatePackages");
}

module.exports.launchARemove = function (user, package) {
  return callSoftWareDaemonWithPackage(user, package, "removePackages");
}

module.exports.launchAQuery = function (user, package) {
  return callSoftWareDaemonWithPackage(user, package, "queryPackage");
}

module.exports.launchListPackages = function (user) {
  return callSoftWareDaemon(user, "listInstalledPackages");
}

module.exports.launchGetOperatingSystem = function (user) {
  return callSoftWareDaemon(user, "getOperatingSystem");
}

function callSoftWareDaemon(user, fctToCall, cb = onStatusChange) {
  return new Promise(function (fulfill, reject) {
    softwareDaemon[fctToCall](user, cb)
    .then(function (returnStatus) {
      fulfill(returnStatus);
    }).catch(function (error) {
      reject(error);
    });
  });
}

function callSoftWareDaemonWithPackage(user, package, fctToCall, cb = onStatusChange) {
  return new Promise(function (fulfill, reject) {
    softwareDaemon[fctToCall](user, package, cb)
    .then(function (returnStatus) {
      fulfill(returnStatus);
    }).catch(function (error) {
      reject(error);
    });
  });
}
