//
// Test on log's adapters methods
//

//
// Require all the necessary modules
//
const logAdapter = require('../adapters/log');
const mongoose = require('../libs/mongoose');

describe('log managers methods', function () {
  it('should return all logs from database by userId', function () {

    var testLogger = logAdapter.createChild({ header: { userId: 'testUser' } });

    testLogger.info('toto');
    var result = logAdapter.getLogsById('testUser');
    console.log(result);

    // expect(result.header.userId).toEqual('testUser');
    // expect(result.msg).toEqual('toto');
    mongoose.connection.db.dropDatabase();
  });
});
