const workersIndex = require('../../workers/index.js');

describe('A workers index.js', function () {
  var libs  = {};
  var conf  = {};

  it('should return an empty object', function () {
    expect(workersIndex(libs, conf)).toEqual(jasmine.any(Object));
  });
});
