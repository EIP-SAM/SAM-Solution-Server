const adaptersIndex = require('../../adapters/index.js');

describe('A adapters index.js', function () {
  var libs  = {};
  var conf  = {};
  var models  = {};
  var workers  = {};

  it('should return an empty object', function () {
    expect(adaptersIndex(libs, conf, models, workers)).toEqual(jasmine.any(Object));
  });
});
