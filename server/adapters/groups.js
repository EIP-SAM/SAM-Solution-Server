var GroupsModel = null;

module.exports.init = function (libs, conf, models, workers) {
  GroupsModel = models.Groups;
};

module.exports.findById = function (id) {
  return GroupsModel.findOne({ where: { id: id } });
};

module.exports.findByName = function (name) {
  return GroupsModel.findOne({ where: { name: name } });
};

module.exports.createGroup = function (name, rights) {
  return GroupsModel.create({ name: name, rights: rights });
};
