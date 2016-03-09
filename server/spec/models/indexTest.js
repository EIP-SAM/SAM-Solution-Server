const modelsIndex = require('../../models/index.js');

describe('A models index.js', function () {
  var libs  = {};
  var conf  = {};

  it('should return an empty object', function () {
    expect(modelsIndex(libs, conf)).toEqual(jasmine.any(Object));
  });
});
