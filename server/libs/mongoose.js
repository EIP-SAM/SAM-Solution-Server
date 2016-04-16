module.exports = function initMongoose(libs, conf) {
  libs.mongoose = require('mongoose');

  var url = 'mongodb://';
  url += conf.mongoose.dbConfig.host;
  url += ':' + conf.mongoose.port;
  url += '/' + conf.mongoose.dbConfig.database;

  libs.mongoose.connect(url);
  return new Promise(function (fulfill) {
    fulfill();
  });
};
