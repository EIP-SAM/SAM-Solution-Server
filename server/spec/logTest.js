//
// Test on log methods and model
//

const logManager = require('../managers/log');

describe('It should test logManager methods: ', function () {

  var allLogs;

  beforeEach(function (done) {

    var promise = logManager.getLogs();

    promise.then(function (resolve) {

      allLogs = resolve;
      done();
    }, function (err) {

      allLogs = err;
      done();
    });
  });

  it('Should have all he log', function () {
    expect(allLogs).not.toBe(undefined);
  });
});
