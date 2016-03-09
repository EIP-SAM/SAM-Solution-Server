const libsIndex = require('../../libs/index.js');
const config  = require('../../config/base.config.json');

describe('A libs index.js', function () {

  it('should return an object', function () {
    expect(libsIndex(config)).toEqual(jasmine.any(Object));
  });
});
