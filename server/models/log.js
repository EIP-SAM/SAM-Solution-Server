//
// Model Log
//

var mongoose = require('../libs/mongoose');

var Schema = mongoose.Schema;

var logSchema = new Schema({
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

if (logModel === undefined) {
  logModel = mongoose.model('log', logSchema);
}

module.exports = logModel;
