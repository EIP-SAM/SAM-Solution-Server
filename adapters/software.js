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

module.exports.launchAnInstall = (user, packages) => callSoftWareDaemonWithPackage(user, packages, 'installPackages');

module.exports.launchAnUpdate = (user, packages) => callSoftWareDaemonWithPackage(user, packages, 'updatePackages');

module.exports.launchARemove = (user, packages) => callSoftWareDaemonWithPackage(user, packages, 'removePackages');

module.exports.launchAQuery = (user, packages) => callSoftWareDaemonWithPackage(user, packages, 'queryPackage');

module.exports.launchListPackages = user => callSoftWareDaemon(user, 'listInstalledPackages');

module.exports.launchGetOperatingSystem = user => callSoftWareDaemon(user, 'getOperatingSystem');

function callSoftWareDaemon(user, fctToCall, cb = onStatusChange) {
  return new Promise((fulfill, reject) => {
    softwareDaemon[fctToCall](user, cb)
    .then((returnStatus) => {
      fulfill(returnStatus);
    }).catch((error) => {
      reject(error);
    });
  });
}

function callSoftWareDaemonWithPackage(user, packages, fctToCall, cb = onStatusChange) {
  return new Promise((fulfill, reject) => {
    softwareDaemon[fctToCall](user, packages, cb)
    .then((returnStatus) => {
      fulfill(returnStatus);
    }).catch((error) => {
      reject(error);
    });
  });
}
