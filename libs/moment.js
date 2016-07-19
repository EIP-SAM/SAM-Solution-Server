//
// moment library
//

const moment = require('moment');

module.exports.makeDayFromString = function (dateString) {
  var startDate = moment(new Date(dateString));
  var endDate = moment(new Date(dateString));

  startDate.set('hour', 0).set('minute', 0).set('seconds', 0);
  endDate.set('hour', 23).set('minute', 59).set('seconds', 59);

  return { startDate: startDate, endDate: endDate };
};

module.exports.getMomentToDate = function (dateString) {
  return new Date(dateString);
};
