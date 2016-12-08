const logger = require('../../libs/bunyan').setModuleName('Daemon-software');

var commandIndex = 0;

function exec(userName, method, params, onStatusChange) {
  return new Promise(function (fulfill, reject) {
    let socket = require('../../libs/socket-io').socketArray.daemon[userName];

    method = 'daemon_software_' + method;
    if (typeof socket !== 'undefined') {
      if (socket._events[method + '_status'] === undefined) {
        socket.on(method + '_status', onStatusChange);
      }
      socket.on(method + '_finished_' + commandIndex, function (returnStatus) {
        if (!returnStatus.error) {
          fulfill(returnStatus);
        } else {
          reject(returnStatus);
        }
      });

      logger.info('Send ' + method + ' command for user ' + userName);
      socket.emit(method, params, commandIndex++);
    } else {
      logger.warn('Daemon of user ' + userName + ' is not connected');
      reject('Daemon of user ' + userName + ' is not connected');
    }
  });
}

module.exports.installPackages = function (userName, packages, onStatusChange) {
  return exec(userName, 'install_packages', packages, onStatusChange);
};

module.exports.updatePackages = function (userName, packages, onStatusChange) {
  return exec(userName, 'update_packages', packages, onStatusChange);
};

module.exports.removePackages = function (userName, packages, onStatusChange) {
  return exec(userName, 'remove_packages', packages, onStatusChange);
};

module.exports.queryPackage = function (userName, packageName, onStatusChange) {
  return exec(userName, 'query_package', packageName, onStatusChange);
};

module.exports.listInstalledPackages = function (userName, onStatusChange) {
  return exec(userName, 'list_installed_packages', {}, onStatusChange);
};

module.exports.getOperatingSystem = function (userName, onStatusChange) {
  return exec(userName, 'get_operating_system', {}, onStatusChange);
};
