var Sequelize = null;
var GroupsModel = null;
var UsersModel = null;

module.exports.init = function (libs, conf, models, workers) {
  Sequelize = libs.Sequelize;
  GroupsModel = models.Groups;
  UsersModel = models.Users;
};

module.exports.findAll = function () {
  return GroupsModel.findAll({
    attributes: ['id', 'name', 'baseRights'],
    include: [{
        model: UsersModel,
        where: { groupId: Sequelize.col('groups.id') },
      },
    ],
  });
};

module.exports.findById = function (id) {
  return GroupsModel.findOne({ where: { id: id } });
};

module.exports.findByName = function (name) {
  return GroupsModel.findOne({ where: { name: name } });
};

module.exports.createGroup = function (name, rights) {
  return GroupsModel.create({ name: name, baseRights: rights });
};
