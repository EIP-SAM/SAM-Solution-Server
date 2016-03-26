module.exports = function initAdapters(libs, conf, models, workers) {
  const adapters = {};

  // Retrieve the adapters
  adapters.Users = require('./users');
  adapters.Groups = require('./groups');
  adapters.Rights = require('./rights');

  // Initialize the adapters
  adapters.Users.init(libs, conf, models, workers);
  adapters.Groups.init(libs, conf, models, workers);
  adapters.Rights.init(libs, conf, models, workers);

  return adapters;
};
