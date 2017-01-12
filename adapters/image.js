//
// Image adapter
//

const ImageModel = require('../models/image');

//
// Get all images
//
module.exports.getImages = () => ImageModel.findAll({
  order: [['createdAt', 'DESC']],
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
