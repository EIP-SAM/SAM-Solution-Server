//
// Worker Migration
//

const logger = require('../libs/bunyan').setModuleName('Migration');
const rebootCommand = require('../websocket/daemon/reboot');
const getMacAdressCommand = require('../websocket/daemon/getMacAdress');

function rebootDaemon(userName) {
  return new Promise((fullfill, reject) => {
    rebootCommand.exec(userName, () => {
      logger.info('Reboot started for ' + userName);
      fullfill()
    });
  });
}

function getMacAdress(userName) {
  return new Promise((fullfill, reject) => {
    getMacAdressCommand.exec(userName, (data) => {
      logger.info('Mac adress for ' + userName);
      console.log('DATA RECEIVED FROM GET MAC ADDRESS service : ' + data);
      fullfill(data.macAddress)
    });
  });
}

function execCommandDrbl(imagePath, macAddress) {
  return new Promise((fullfill, reject) => {
    
  });
}

//
// Exec a migration for a specific user
//
module.exports.execMigration = function (userName, imagePath) {
  return new Promise((fullfill, reject) => {
    logger.info(`Exec migration for ${userName} with image [${imagePath}]`);

    getMacAdress(userName).then((macAddress) => {
      console.log("FINAL MACADDRESS : " + macAddress);
      rebootDaemon(userName).then(() => {
        /*execCommandDrbl(imagePath, macAddress).then(() => {
          
        });*/
      });
    });
  });
};
