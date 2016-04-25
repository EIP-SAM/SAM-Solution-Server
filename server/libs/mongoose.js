const conf = require('../config/mongoose.config.json');

const mongoose = require('mongoose');

var url = 'mongodb://';
url += conf.dbConfig.host;
url += ':' + conf.port;
url += '/' + conf.dbConfig.database;

mongoose.connect(url);
module.exports = mongoose;
