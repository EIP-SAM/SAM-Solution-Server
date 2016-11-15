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
  app.get('/api/logged-in/admin/images/', function (req, res) {
    let promise = imageController.getImages();

    promise.then(function (images) {
      res.json({ images });
    }).catch(function (err) {
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
  app.get('/api/logged-in/admin/image/:image_id', function (req, res) {
    let promise = imageController.getImageById(req.params.image_id);

    promise.then(function (image) {
      res.json({ image });
    }).catch(function (err) {
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
  app.post('/api/logged-in/admin/image/add', function (req, res) {
    let imageObj = JSON.parse(req.body.imageObj);
    let promise = imageController.createImage(imageObj);

    promise.then(function (image) {
      res.json({ image });
    }).catch(function (err) {
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
  app.post('/api/logged-in/admin/image/:image_id/edit', function (req, res) {
    let imageObj = JSON.parse(req.body.imageObj);
    let promise = imageController.updateImageById(imageObj);

    promise.then(function (image) {
      res.json({ image });
    }).catch(function (err) {
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
  app.delete('/api/logged-in/admin/image/:image_id/delete', function (req, res) {
    let promise = imageController.deleteImageById(req.params.image_id);

    promise.then(function (image) {
      res.json({ image });
    }).catch(function (err) {
      logger.error(err);
      res.json({
        error: true,
        data: err,
      });
    });
  });

};
