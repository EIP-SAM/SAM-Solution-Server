var initExpress = require('../../libs/express');
var express = require('express');

describe('express', function () {

  it('should return the app object', function () {
    var ret = initExpress({ secret: 'azerty', rootFolder: './' });
    expect(typeof ret.use === 'function').toBeTruthy();
  });
});
