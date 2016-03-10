const controllersIndex = require('../../controllers/index.js');

describe('A controllers index.js', function () {
  var libs  = {};
  var conf  = {};
  var managers  = {};

  it('should return an empty object', function () {
    expect(controllersIndex(libs, conf, managers)).toEqual(jasmine.any(Object));
  });
});
