var flash = require('../../libs/connectFlash');

describe('connectFlash', function () {

  it('should use two middleware', function () {
    var app = { use: function () {
        return;
      },
    };

    spyOn(app, 'use');
    flash(app);
    expect(app.use).toHaveBeenCalledTimes(2);
  });
});
