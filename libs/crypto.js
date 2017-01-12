const logger = require('../libs/bunyan').setModuleName('Software');

try {
  module.exports = require('crypto'); // eslint-disable-line global-require
} catch (err) {
  logger.error('Fatal error: Cryptographic support is disabled, aborting');
  logger.error(err.message);
  process.exit(1);
}
