//
// Image adapter
//
const Sequelize = require('sequelize');

const ImageModel = require('../models/image');

//
// Get all images
//
module.exports.getAllImages = function () {
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
//
module.exports.createImage = function (imageObj) {
  return Image.create(imageObj);
};

//
// Update image by his id
//
module.exports.updateImageById = function (imageObj) {
  return Image.update(imageObj, {
    where: { id: imageObj.migrationId },
  });
};

//
// Delete image by his id
//
module.exports.deleteImageById = function (imageId) {
  return Image.destroy({
    where: { id: imageObj.migrationId },
  });
};
