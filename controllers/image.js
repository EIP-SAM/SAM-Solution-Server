//
// Image controller
//
const imageManager = require('../managers/image');

//
// Launch getImages from manager
//
module.exports.getImages = function () {
  return imageManager.getImages();
};

//
// Launch getImageById from manager
//
module.exports.getImageById = function (imageId) {
  return imageManager.getImageById(imageId);
};

//
// Launch createImage from manager
// Parameter imageObj got properties:
// - name (String)
// - operatingSystem (String)
// - version (String)
//
module.exports.createImage = function (imageObj) {
  return imageManager.createImage(imageObj);
};

//
// Launch updateImageById from manager
// Parameter imageObj got properties:
// - id (Int)
// - name (String)
// - operatingSystem (String)
// - version (String)
//
module.exports.updateImageById = function (imageObj) {
  return imageManager.updateImageById(imageObj);
};

//
// Launch deleteImageById from manager
//
module.exports.deleteImageById = function (imageId) {
  return imageManager.deleteImageById(imageId);
};
