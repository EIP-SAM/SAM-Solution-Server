//
// Worker Migration
//

const exec = require('child_process').exec;

const logger = require('../libs/bunyan').setModuleName('Migration');
const rebootCommand = require('../websocket/daemon/reboot');
const getMacAdressCommand = require('../websocket/daemon/getMacAdress');

const configCmd = require('../config/base.config.json').onMigrationExecCmd;

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

function execMigrationCmd(macAddress, imagePath) {
  return new Promise((fullfill, reject) => {
    let cmd = '';
    if (!configCmd || configCmd === '') {
      fullfill('Command not found in config, migration continuing');
    } else {
      cmd = configCmd.replace('#macaddress#', macAddress).replace('#imagepath#', imagePath);

      logger.info(`Exec now DRBL cmd : ${cmd}`);
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          logger.debug(`DRBL cmd error output : ${stderr}`);
          reject(`${error}`);
          return;
        }
        logger.debug(`DRBL cmd output : ${stdout}`);
        fullfill('DRBL command executed');
      });
    }
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
      return execMigrationCmd(macAddress, imagePath).then((msg) => {
        logger.info(`Exec DRBL command went OK : ${msg}`);
        return rebootDaemon(userName).then(() => {
          fullfill(`Migration started for ${userName}`);
        });
      }).catch((err) => {
        logger.error(`${err}`);
        reject(err);
      });
    });
  });
