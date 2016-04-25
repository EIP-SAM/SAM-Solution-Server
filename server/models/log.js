//
// Model Log
//

const mongoose = require('../libs/mongoose');

const Schema = mongoose.Schema;

const logSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  hostname: {
    type: String,
    required: true,
  },
  pid: {
    type: Number,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  header: {
    type: Object,
  },
  data: {
    type: Object,
  },
  msg: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
});

const logModel = mongoose.model('log', logSchema);

module.exports = logModel;
