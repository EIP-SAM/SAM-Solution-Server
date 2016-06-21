try {
  module.exports = require('crypto');
} catch (err) {
  console.log('Fatal error: Cryptographic support is disabled, aborting');
  console.log(err.message);
  process.exit(1);
}
