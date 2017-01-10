//
// Image controller
//
const imageManager = require('../managers/image');

//
// Launch getImages from manager
//
module.exports.getImages = () => imageManager.getImages();

//
// Launch getImageById from manager
//
module.exports.getImageById = imageId => imageManager.getImageById(imageId);

//
// Launch createImage from manager
// Parameter imageObj got properties:
// - name (String)
// - operatingSystem (String)
// - version (String)
//
module.exports.createImage = imageObj => imageManager.createImage(imageObj);

//
// Launch updateImageById from manager
// Parameter imageObj got properties:
// - id (Int)
// - name (String)
// - operatingSystem (String)
// - version (String)
//
module.exports.updateImageById = imageObj => imageManager.updateImageById(imageObj);

//
// Launch deleteImageById from manager
//
module.exports.deleteImageById = imageId => imageManager.deleteImageById(imageId);
