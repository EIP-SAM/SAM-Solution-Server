//
// Worker Migration
//

const exec = require('child_process').exec;
const path = require('path');

const logger = require('../libs/bunyan').setModuleName('Migration');
const rebootCommand = require('../websocket/daemon/reboot');
const getMacAdressCommand = require('../websocket/daemon/getMacAdress');
const getIpCommand = require('../websocket/daemon/getIpAdress');

const configCmd = require('../config/base.config.json').onMigrationExecCmd;
const imageBasePath = require('../config/base.config.json').systemImagesPath;

function rebootDaemon(userName) {
  return new Promise((fullfill) => {
    rebootCommand.exec(userName, () => {
      logger.info(`Reboot started for ${userName}`);
      fullfill();
    });
  });
}

function getMacAdress(userName) {
  return new Promise((fullfill, reject) => {
    getMacAdressCommand.exec(userName, (data) => {
      if (data === null) {
        reject(`User ${userName} is not connected`);
      }
      logger.info(`Mac adress for ${userName} : data.macAddress`);
      fullfill(data.macAddress);
    });
  });
}

function execMigrationCmd(macAddress, ip, imagePath) {
  return new Promise((fullfill, reject) => {
    let cmd = '';
    if (!configCmd || configCmd === '') {
      fullfill('Command not found in config, migration continuing');
    } else {
      cmd = configCmd.replace(new RegExp('#macaddress#', 'g'), macAddress);
      cmd = cmd.replace(new RegExp('#imagepath#', 'g'), imagePath);
      cmd = cmd.replace(new RegExp('#ipaddress#', 'g'), ip);

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
    imagePath = path.join(imageBasePath, imagePath);
    logger.info(`Exec migration for ${userName} with image [${imagePath}]`);

    getMacAdress(userName).then((macAddress) => {
      if (macAddress === null) {
        return reject(`Unable to perform migration for ${userName}, Mac Address unavailable`);
      }
      getIpCommand.exec(userName).then((ip) => {
        logger.info(`Address Mac for ${userName} : ${macAddress}`);
        return execMigrationCmd(macAddress, ip, imagePath).then((msg) => {
          logger.info(`Exec DRBL command went OK : ${msg}`);
          return rebootDaemon(userName).then(() => {
            fullfill(`Migration started for ${userName}`);
          });
        }).catch((err) => {
          logger.error(`EXEC : ${err}`);
          reject(err);
        });
      }).catch((err) => {
        logger.error(`IP : ${err}`);
        reject(err);
      });
      return null;
    }).catch((err) => {
      logger.error(`MAC : ${err}`);
      reject(err);
    });
  });
