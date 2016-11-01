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

describe('updateImageById', function () {

  var imageObj;

  beforeAll(function () {
    imageObj = {
      imageId: 0,
      name: 'image',
      operatingSystem: 'Window 10',
      version: '1.0',
    };
  });

  it('should return a promise', function () {
    let image = imageAdapter.updateImageById(imageObj);

    expect(typeof image.then === 'function').toBeTruthy();
  });

  it('should have called update once', function () {
    spyOn(ImageModel, 'update');
    imageAdapter.updateImageById(imageObj);
    expect(ImageModel.update).toHaveBeenCalledTimes(1);
  });
});

describe('deleteImageById', function () {

  var imageId;

  beforeAll(function () {
    imageId = 0;
  });

  it('should return a promise', function () {
    let image = imageAdapter.deleteImageById(imageId);

    expect(typeof image.then === 'function').toBeTruthy();
  });

  it('should have called destroy once', function () {
    spyOn(ImageModel, 'destroy');
    imageAdapter.deleteImageById(imageId);
    expect(ImageModel.destroy).toHaveBeenCalledTimes(1);
  });
});
