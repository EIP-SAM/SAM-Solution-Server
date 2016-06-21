var libEnsureLogin = require('../../libs/connectEnsureLogin');
var EnsureLogin = require('connect-ensure-login');

describe('connectEnsureLogin', function () {

  it('should return an EnsureLogin object', function () {
    expect(libEnsureLogin).toBe(EnsureLogin);
  });
});
