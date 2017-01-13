//
// Image adapter
//
const path = require('path');

const ImageModel = require('../models/image');
const ImageWorker = require('../workers/imageFilesystem');
const config = require('../config/base.config.json');

//
// Get all images
//
module.exports.getImages = onlyValid => ImageModel.findAll({
  order: [['createdAt', 'DESC']],
}).then((imagesDb) => {
  const retImage = { images: imagesDb };
  if (onlyValid) {
    return retImage;
  }
  retImage.files = [];
  return ImageWorker.retrieveImages(path.join(config.systemImagesPath, '/*')).then((imagesFs) => {
    imagesFs.forEach((imageFs) => {
      const imageFsIsValid = imagesDb.some((imageDb) => {
        if (imageDb.fileName === imageFs.fileName) {
          imageDb.isValid = true;
          return true;
        }
        imageDb.isValid = !!imageDb.isValid;
        return false;
      });
      if (!imageFsIsValid) {
        retImage.files.push({ name: imageFs.fileName });
      }
    });
    return retImage;
  });
});

//
// Get image by his id
//
module.exports.getImageById = imageId => ImageModel.findById(imageId, {
  order: [['createdAt', 'DESC']],
});

//
// Create image
// Parameter imageObj got properties:
// - name (String)
// - operatingSystem (String)
// - version (String)
//
module.exports.createImage = imageObj => ImageModel.create(imageObj);

//
// Update image by his id
//
module.exports.updateImageById = imageObj => ImageModel.update(imageObj, {
  where: { id: imageObj.imageId },
});

//
// Delete image by his id
//
module.exports.deleteImageById = imageId => ImageModel.destroy({
  where: { id: imageId },
});
