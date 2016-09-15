const conf = require('../config/mongoose.config.json');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var url = 'mongodb://';
url += conf.dbConfig.host;
url += ':' + conf.port;
url += '/' + conf.dbConfig.database;

mongoose.connect(url);

module.exports = mongoose;
