const RightsModel = require('../models/rights');

module.exports.findById = function (id) {
  return RightsModel.findOne({ where: { id: id } });
};

module.exports.createRight = function (data) {
  return RightsModel.create({ data: data });
};
