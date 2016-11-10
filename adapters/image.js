//
// Image adapter
//
const Sequelize = require('sequelize');

const ImageModel = require('../models/image');

//
// Get all images
//
module.exports.getImages = function () {
  return ImageModel.findAll({
    order: [['createdAt', 'DESC']],
  });
};

//
// Get image by his id
//
module.exports.getImageById = function (imageId) {
  return ImageModel.findById(imageId, {
    order: [['createdAt', 'DESC']],
  });
};

//
// Create image
// Parameter imageObj got properties:
// - name (String)
// - operatingSystem (String)
// - version (String)
//
module.exports.createImage = function (imageObj) {
  return ImageModel.create(imageObj);
};

//
// Update image by his id
//
module.exports.updateImageById = function (imageObj) {
  return ImageModel.update(imageObj, {
    where: { id: imageObj.imageId },
  });
};

//
// Delete image by his id
//
module.exports.deleteImageById = function (imageId) {
  return ImageModel.destroy({
    where: { id: imageId },
  });
};
