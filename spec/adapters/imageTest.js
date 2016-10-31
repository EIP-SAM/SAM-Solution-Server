//
// Image test unit
//
const ImageModel = require('../../models/image');
const imageAdapter = require('../../adapters/image');

describe('getImages', function () {
  it('should return a promise', function () {
    let images = imageAdapter.getImages();

    expect(typeof images.then === 'function').toBeTruthy();
  });

  it('should have called findAll once', function () {
    spyOn(ImageModel, 'findAll');
    imageAdapter.getImages();
    expect(ImageModel.findAll).toHaveBeenCalledTimes(1);
  });
});

describe('getImageById', function () {

  var imageId;

  beforeAll(function () {
    imageId = 0;
  });

  it('should return a promise', function () {
    let image = imageAdapter.getImageById(imageId);

    expect(typeof image.then === 'function').toBeTruthy();
  });

  it('should have called findById once', function () {
    spyOn(ImageModel, 'findById');
    imageAdapter.getImageById(imageId);
    expect(ImageModel.findById).toHaveBeenCalledTimes(1);
  });
});

describe('createImage', function () {

  var imageObj;

  beforeAll(function () {
    imageObj = {
      name: 'image',
      operatingSystem: 'Window 10',
      version: '1.0',
    };
  });

  it('should return a promise', function () {
    let image = imageAdapter.createImage(imageObj);

    expect(typeof image.then === 'function').toBeTruthy();
  });

  it('should have called create once', function () {
    spyOn(ImageModel, 'create');
    imageAdapter.createImage(imageObj);
    expect(ImageModel.create).toHaveBeenCalledTimes(1);
  });
});
