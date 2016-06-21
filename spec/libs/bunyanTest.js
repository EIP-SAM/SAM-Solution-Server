//
// Unit test for bunyan lib
//
var logger = require('../../libs/bunyan');

describe('createLogger', function () {
  const INFO = 30;
  const WARN = 40;
  const STREAM_TYPE = 'stream';
  const FILE_TYPE = 'file';
  const PATH = './log/error.log';

  it('should return a object with right values', function () {
    expect(logger.fields.name).toEqual('sam-logger');
    expect(logger.streams[0].level).toEqual(INFO);
    expect(logger.streams[1].level).toEqual(INFO);
    expect(logger.streams[2].level).toEqual(WARN);
    expect(logger.streams[0].type).toEqual(STREAM_TYPE);
    expect(logger.streams[1].type).toEqual(STREAM_TYPE);
    expect(logger.streams[2].type).toEqual(FILE_TYPE);
    expect(logger.streams[2].path).toEqual(PATH);
  });
});
