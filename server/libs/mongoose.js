module.exports = function initMongoose(libs, conf) {
  libs.mongoose = require('mongoose');

  var url = 'mongodb://';
  url += conf.host;
  url += ':' + conf.port;
  url += '/' + conf.database;

  libs.mongoose.connect(url);
};
