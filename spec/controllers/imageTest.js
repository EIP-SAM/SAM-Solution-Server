//
// Image controller test unit
//
const imageController = require('../../controllers/image');
const imageManager = require('../../managers/image');

const ImageModel = require('../../models/image');

describe('getImages', function () {
  it('should return a promise', function () {
    let images = imageController.getImages();

    expect(typeof images.then === 'function').toBeTruthy();
  });

  it('should have called getImages once', function () {
    spyOn(imageManager, 'getImages');
    imageController.getImages();
    expect(imageManager.getImages).toHaveBeenCalledTimes(1);
  });
});

describe('getImageById', function () {
  var imageId;

  beforeAll(function () {
    imageId = 0;
  });

  it('should return a promise', function () {
    let image = imageController.getImageById(imageId);

    expect(typeof image.then === 'function').toBeTruthy();
  });

  it('should have called getImageById once', function () {
    spyOn(imageManager, 'getImageById');
    imageController.getImageById(imageId)
    expect(imageManager.getImageById).toHaveBeenCalledTimes(1);
  });
});

describe('createImage', function () {
  var imageObj;

  beforeAll(function () {
    imageObj = {
      name: 'Windows 8.1',
      operatingSystem: 'Windows 8.1',
      version: '1.0',
    };
  });

  it('should return a promise', function () {
    let image = imageController.createImage(imageObj);

    expect(typeof image.then === 'function').toBeTruthy();
  });

  it('should have called createMigration once', function () {
    spyOn(imageManager, 'createImage');
    imageController.createImage(imageObj)
    expect(imageManager.createImage).toHaveBeenCalledTimes(1);
  });
});

describe('updateImageById', function () {
  var imageObj;

  beforeAll(function () {
    imageObj = {
      id: 0,
      name: 'Windows 8.1',
      operatingSystem: 'Windows 8.1',
      version: '1.0',
    };
  });

  it('should return a promise', function () {
    let image = imageController.updateImageById(imageObj);

    expect(typeof image.then === 'function').toBeTruthy();
  });

  it('should have called updateImageById once', function () {
    spyOn(imageManager, 'updateImageById');
    imageController.updateImageById(imageObj)
    expect(imageManager.updateImageById).toHaveBeenCalledTimes(1);
  });
});

describe('deleteImageById', function () {
  var imageId;

  beforeAll(function () {
    imageId = 0;
  });

  it('should return a promise', function () {
    let image = imageController.deleteImageById(imageId);

    expect(typeof image.then === 'function').toBeTruthy();
  });

  it('should have called deleteImageById once', function () {
    spyOn(imageManager, 'deleteImageById');
    imageController.deleteImageById(imageId)
    expect(imageManager.deleteImageById).toHaveBeenCalledTimes(1);
  });
});
