//
// Image manager
//
const imageAdapter = require('../adapters/image');

//
// Launch getImages from adapter
//
module.exports.getImages = () => imageAdapter.getImages();

//
// Launch getImageById from adapter
//
module.exports.getImageById = imageId => imageAdapter.getImageById(imageId);

//
// Launch createImage from adapter
// Parameter imageObj got properties:
// - name (String)
// - operatingSystem (String)
// - version (String)
//
module.exports.createImage = imageObj => imageAdapter.createImage(imageObj);

//
// Launch updateImageById from adapter
// Parameter imageObj got properties:
// - id (Int)
// - name (String)
// - operatingSystem (String)
// - version (String)
//
module.exports.updateImageById = imageObj => imageAdapter.updateImageById(imageObj);

//
// Launch deleteImageById from adapter
//
module.exports.deleteImageById = imageId => imageAdapter.deleteImageById(imageId);
