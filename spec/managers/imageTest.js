//
// Image manager test unit
//
const imageManager = require('../../managers/image');
const imageAdapter = require('../../adapters/image');

const ImageModel = require('../../models/image');

describe('getImages', function () {
  it('should return a promise', function () {
    let images = imageManager.getImages();

    expect(typeof images.then === 'function').toBeTruthy();
  });

  it('should have called getImages once', function () {
    spyOn(imageAdapter, 'getImages');
    imageManager.getImages();
    expect(imageAdapter.getImages).toHaveBeenCalledTimes(1);
  });
});

describe('getImageById', function () {
  var imageId;

  beforeAll(function () {
    imageId = 0;
  });

  it('should return a promise', function () {
    let image = imageManager.getImageById(imageId);

    expect(typeof image.then === 'function').toBeTruthy();
  });

  it('should have called getImageById once', function () {
    spyOn(imageAdapter, 'getImageById');
    imageManager.getImageById(imageId)
    expect(imageAdapter.getImageById).toHaveBeenCalledTimes(1);
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
    let image = imageManager.createImage(imageObj);

    expect(typeof image.then === 'function').toBeTruthy();
  });

  it('should have called createMigration once', function () {
    spyOn(imageAdapter, 'createImage');
    imageManager.createImage(imageObj)
    expect(imageAdapter.createImage).toHaveBeenCalledTimes(1);
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
    let image = imageManager.updateImageById(imageObj);

    expect(typeof image.then === 'function').toBeTruthy();
  });

  it('should have called updateImageById once', function () {
    spyOn(imageAdapter, 'updateImageById');
    imageManager.updateImageById(imageObj)
    expect(imageAdapter.updateImageById).toHaveBeenCalledTimes(1);
  });
});

describe('deleteImageById', function () {
  var imageId;

  beforeAll(function () {
    imageId = 0;
  });

  it('should return a promise', function () {
    let image = imageManager.deleteImageById(imageId);

    expect(typeof image.then === 'function').toBeTruthy();
  });

  it('should have called deleteImageById once', function () {
    spyOn(imageAdapter, 'deleteImageById');
    imageManager.deleteImageById(imageId)
    expect(imageAdapter.deleteImageById).toHaveBeenCalledTimes(1);
  });
});
