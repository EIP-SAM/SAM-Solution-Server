//
// Image manager
//
const imageAdapter = require('../adapters/image');

//
// Launch getImages from adapter
//
module.exports.getImages = function () {
  return imageAdapter.getImages();
};

//
// Launch getImageById from adapter
//
module.exports.getImageById = function (imageId) {
  return imageAdapter.getImageById(imageId);
};

//
// Launch createImage from adapter
// Parameter imageObj got properties:
// - name (String)
// - operatingSystem (String)
// - version (String)
//
module.exports.createImage = function (imageObj) {
  return imageAdapter.createImage(imageObj);
};

//
// Launch updateImageById from adapter
// Parameter imageObj got properties:
// - id (Int)
// - name (String)
// - operatingSystem (String)
// - version (String)
//
module.exports.updateImageById = function (imageObj) {
  return imageAdapter.updateImageById(imageObj);
};

//
// Launch deleteImageById from adapter
//
module.exports.deleteImageById = function (imageId) {
  return imageAdapter.deleteImageById(imageId);
};
