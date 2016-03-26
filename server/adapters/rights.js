var RightsModel = null;

module.exports.init = function (libs, conf, models, workers) {
  RightsModel = models.Rights;
};

module.exports.findById = function (id) {
  return RightsModel.findOne({ where: { id: id } });
};

module.exports.createRight = function (data) {
  return RightsModel.create({ data: data });
};
