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

module.exports.launchAnInstall = function (user, packages) {
  return callSoftWareDaemonWithPackage(user, packages, 'installPackages');
};

module.exports.launchAnUpdate = function (user, packages) {
  return callSoftWareDaemonWithPackage(user, packages, 'updatePackages');
};

module.exports.launchARemove = function (user, packages) {
  return callSoftWareDaemonWithPackage(user, packages, 'removePackages');
};

module.exports.launchAQuery = function (user, packages) {
  return callSoftWareDaemonWithPackage(user, packages, 'queryPackage');
};

module.exports.launchListPackages = function (user) {
  return callSoftWareDaemon(user, 'listInstalledPackages');
};

module.exports.launchGetOperatingSystem = function (user) {
  return callSoftWareDaemon(user, 'getOperatingSystem');
};

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

function callSoftWareDaemonWithPackage(user, packages, fctToCall, cb = onStatusChange) {
  return new Promise(function (fulfill, reject) {
    softwareDaemon[fctToCall](user, packages, cb)
    .then(function (returnStatus) {
      fulfill(returnStatus);
    }).catch(function (error) {
      reject(error);
    });
  });
}
