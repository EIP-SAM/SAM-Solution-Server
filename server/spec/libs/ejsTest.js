var ejs = require('../../libs/ejs');

describe('ejs', function () {

  it('should use two middleware', function () {
    var app = { set: function () {
        return;
      },
    };

    spyOn(app, 'set');
    ejs(app, { rootFolder: './' });
    expect(app.set).toHaveBeenCalledTimes(2);
  });
});
