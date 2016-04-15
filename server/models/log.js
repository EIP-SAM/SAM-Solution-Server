//
// Model Log
//
var logModel;

module.exports = function initLogModel(libs, models) {
  var Schema = libs.mongoose.Schema;

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
    logModel = libs.mongoose.model('log', logSchema);
  }

  models.log = logModel;
};
