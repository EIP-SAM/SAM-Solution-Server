//
// Manager Software
//

const softwareAdapter = require('../adapters/software');
const softwareDaemon = require('../daemon/software');

//
// Get all users
// module.exports.allUsers = function (req, res) {
//   return softwareAdapter.allUsers().then(function(results){
//     return results;
//   });
// }


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

// module.exports.launchAnInstall = function (req, res) {
//   return new Promise(function (fulfill, reject) {
//     softwareDaemon.installPackages('grenadingue', ['foo', 'bar', 'baz'], onStatusChange)
//     .then(function (returnStatus) {
//       console.log("GOOD");
//       console.log(returnStatus);
//     }).catch(function (error) {
//       console.log("ERROR");
//       console.log(error);
//     });
//   });
// }

function launchAnInstall() {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.installPackages('grenadingue', ['foo', 'bar', 'baz'], onStatusChange)
    .then(function (returnStatus) {
      console.log(returnStatus);
    }).catch(function (error) {
      console.log(error);
    });
  });
}

function launchAnUpdate() {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.updatePackages('grenadingue', ['foo', 'bar', 'baz'], onStatusChange)
    .then(function (returnStatus) {
      console.log(returnStatus);
    }).catch(function (error) {
      console.log(error);
    });
  });
}

function launchARemove() {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.removePackages('grenadingue', ['foo', 'bar', 'baz'], onStatusChange)
    .then(function (returnStatus) {
      console.log(returnStatus);
    }).catch(function (error) {
      console.log(error);
    });
  });
}

function launchAQuery() {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.queryPackage('grenadingue', 'foo', onStatusChange)
    .then(function (returnStatus) {
      console.log(returnStatus);
    }).catch(function (error) {
      console.log(error);
    });
  });
}

function launchListPackages() {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.listInstalledPackages('grenadingue', onStatusChange)
    .then(function (returnStatus) {
      console.log(returnStatus);
    }).catch(function (error) {
      console.log(error);
    });
  });
}

function launchGetOperatingSystem() {
  return new Promise(function (fulfill, reject) {
    softwareDaemon.getOperatingSystem('grenadingue', onStatusChange)
    .then(function (returnStatus) {
      console.log(returnStatus);
    }).catch(function (error) {
      console.log(error);
    });
  });
}

setTimeout(launchAnInstall, 4 * 1000);
setTimeout(launchAnUpdate, 6 * 1000);
setTimeout(launchARemove, 8 * 1000);
setTimeout(launchAQuery, 10 * 1000);
setTimeout(launchListPackages, 12 * 1000);
setTimeout(launchGetOperatingSystem, 14 * 1000);
