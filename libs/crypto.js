try {
  module.exports = require('crypto'); // eslint-disable-line global-require
} catch (err) {
  console.log('Fatal error: Cryptographic support is disabled, aborting');
  console.log(err.message);
  process.exit(1);
}
