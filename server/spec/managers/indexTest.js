const managersIndex = require('../../managers/index.js');

describe('A managers index.js', function () {
  var libs  = {};
  var conf  = {};
  var adapters  = {};

  it('should return an empty object', function () {
    expect(managersIndex(libs, conf, adapters)).toEqual(jasmine.any(Object));
  });
});
