//
// Image routes
//
const imageController = require('../controllers/image');

//
// Logger configuration
//
const logger = require('../libs/bunyan').setModuleName('image');

module.exports = function initImageRoutes(app) {
  //
  // Get all images
  //
  app.get('/api/logged-in/admin/images/', (req, res) => {
    const promise = imageController.getImages(JSON.parse(req.query.isValid));

    promise.then((images) => {
      res.json({ images });
    }).catch((err) => {
      logger.error(err);
      res.json({
        error: true,
        data: err,
      });
    });
  });

  //
  // Get image by id
  //
  app.get('/api/logged-in/admin/image/:image_id', (req, res) => {
    const promise = imageController.getImageById(req.params.image_id);

    promise.then((image) => {
      res.json({ image });
    }).catch((err) => {
      logger.error(err);
      res.json({
        error: true,
        data: err,
      });
    });
  });

  //
  // Create an image
  // Parameter imageObj got properties:
  // - name (String)
  // - operatingSystem (String)
  // - version (String)
  //
  app.post('/api/logged-in/admin/image/add', (req, res) => {
    const imageObj = req.body.imageObj;
    const promise = imageController.createImage(imageObj);

    promise.then((image) => {
      res.json({ image });
    }).catch((err) => {
      logger.error(err);
      res.json({
        error: true,
        data: err,
      });
    });
  });

  //
  // Update an image
  // Parameter imageObj got properties:
  // - id (Int)
  // - name (String)
  // - operatingSystem (String)
  // - version (String)
  //
  app.post('/api/logged-in/admin/image/:image_id/edit', (req, res) => {
    const imageObj = req.body.imageObj;
    const promise = imageController.updateImageById(imageObj);

    promise.then((image) => {
      res.json({ image });
    }).catch((err) => {
      logger.error(err);
      res.json({
        error: true,
        data: err,
      });
    });
  });

  //
  // Delete an image
  //
  app.delete('/api/logged-in/admin/image/:image_id/delete', (req, res) => {
    const promise = imageController.deleteImageById(req.params.image_id);

    promise.then((image) => {
      res.json({ image });
    }).catch((err) => {
      logger.error(err);
      res.json({
        error: true,
        data: err,
      });
    });
  });
};
