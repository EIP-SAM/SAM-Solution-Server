var Sequelize = null;
var UsersModel = null;
var GroupsModel = null;

module.exports.init = function (libs, conf, models, workers) {
  Sequelize = libs.Sequelize;
  UsersModel = models.Users;
  GroupsModel = models.Groups;
};

module.exports.findAll = function () {
  return UsersModel.findAll({
    attributes: ['id', 'name', 'email'],
    include: [{
        model: GroupsModel,
        where: { userId: Sequelize.col('users.id') },
      },
    ],
  });
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
