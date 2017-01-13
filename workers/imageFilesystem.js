//
// Worker ImageFilesystem
//
const path = require('path');
const glob = require('glob');

const logger = require('../libs/bunyan').setModuleName('Migration');

//
// Retrieve all images in target directory
//
module.exports.retrieveImages = basePath =>
  new Promise((fullfill, reject) => {
    logger.info(`Retrieving images in ${basePath}`);

    glob(basePath, {}, (err, files) => {
      if (err !== null) {
        reject(`Error retrieving files : ${basePath}`);
      }

      const filesArray = [];
      files.forEach((file) => {
        filesArray.push({
          dir: path.dirname(file),
          fileName: path.basename(file),
          path: file,
        });
      });

      fullfill(filesArray);
    });
  });
