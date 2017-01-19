const conf = require('../config/mongoose.config.json');

const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

mongoose.Promise = global.Promise;

let url = 'mongodb://';
url += conf.dbConfig.host;
url += `:${conf.port}`;
url += `/${conf.dbConfig.database}`;

mongoose.connect(url);

// Remove batchSize from mongoose queries
Grid(mongoose.mongo, mongoose.connection.db);

module.exports = mongoose;
