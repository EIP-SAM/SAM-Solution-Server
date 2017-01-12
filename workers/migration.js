//
// Worker Migration
//

const logger = require('../libs/bunyan').setModuleName('Migration');
const rebootCommand = require('../websocket/daemon/reboot');
const getMacAdressCommand = require('../websocket/daemon/getMacAdress');

function rebootDaemon(userName) {
  return new Promise((fullfill) => {
    rebootCommand.exec(userName, () => {
      logger.info(`Reboot started for ${userName}`);
      fullfill();
    });
  });
}

function getMacAdress(userName) {
  return new Promise((fullfill) => {
    getMacAdressCommand.exec(userName, (data) => {
      logger.info(`Mac adress for ${userName}`);
      fullfill(data.macAddress);
    });
  });
}

//
// Exec a migration for a specific user
//
module.exports.execMigration = (userName, imagePath) =>
  new Promise((fullfill, reject) => {
    logger.info(`Exec migration for ${userName} with image [${imagePath}]`);

    getMacAdress(userName).then((macAddress) => {
      if (macAddress === null) {
        return reject(`Unable to perform migration for ${userName}, Mac Address unavailable`);
      }
      logger.info(`Address Mac for ${userName} : ${macAddress}`);
      return rebootDaemon(userName).then(() => {
        fullfill(`Migration started for ${userName}`);
      });
    });
  });
