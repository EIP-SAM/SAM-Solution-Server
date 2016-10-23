// daemon Software

module.exports.installPackages = function installPackages(username, packages, status) {
  console.log(username);
  console.log(packages);
  console.log(status);
  return "installPackages ok";
}

module.exports.launchAnUpdate = function launchAnUpdate(username, packages, status) {
  return "launchAnUpdate ok";
}

module.exports.launchARemove = function launchARemove(username, packages, status) {
  return "launchARemove ok";
}

module.exports.launchAQuery = function launchAQuery(username, packages, status) {
  return "launchAQuery ok";
}

module.exports.launchListPackages = function launchListPackages(username, status) {
  return "launchListPackages ok";
}

module.exports.launchGetOperatingSystem = function launchGetOperatingSystem(username, status) {
  return "launchGetOperatingSystem ok";
}
