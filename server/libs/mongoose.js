module.exports = function (libs, config) {
  libs.mongoose = require('mongoose');

  var url = 'mongodb://';
  url += conf.host;
  url += ':' + conf.port;
  url += '/' + conf.database;

  libs.mongoose.connect(url);
};
