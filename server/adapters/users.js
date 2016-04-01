var UsersModel = null;

module.exports.init = function (libs, conf, models, workers) {
  UsersModel = models.Users;
};

module.exports.findById = function (id) {
  return UsersModel.findOne({ where: { id: id } });
};

module.exports.findByName = function (name) {
  return UsersModel.findOne({ where: { name: name } });
};

module.exports.findByEmail = function (email) {
  return UsersModel.findOne({ where: { email: email } });
};

module.exports.createUser = function (name, email, password) {
  return UsersModel.create({ name: name, email: email, password: password });
};
