var passport = require('../../libs/passport');
var Passport = require('passport');

describe('passport', function () {

  it('should use two middleware from app', function () {
    var app = { use: function () {
        return;
      },
    };

    spyOn(app, 'use');
    spyOn(Passport, 'use');
    spyOn(Passport, 'serializeUser');
    spyOn(Passport, 'deserializeUser');

    passport = passport(app);

    expect(app.use).toHaveBeenCalledTimes(2);
    expect(Passport.use).toHaveBeenCalledTimes(1);
    expect(Passport.serializeUser).toHaveBeenCalledTimes(1);
    expect(Passport.deserializeUser).toHaveBeenCalledTimes(1);
  });
});
