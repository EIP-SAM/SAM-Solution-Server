const Sequelize = require('sequelize');
const UsersModel = require('../models/users');
const GroupsModel = require('../models/groups');
require('../models/usersGroupsRelations');

module.exports.findAll = function () {
  return UsersModel.findAll({
    attributes: ['id', 'name', 'email', 'isAdmin'],
    include: [{
        model: GroupsModel,
        where: { userId: Sequelize.col('users.id') },
      },
    ],
  });
};

module.exports.findById = function (id) {
  return UsersModel.findOne({
    where: { id: id },
    include: [{
        model: GroupsModel,
        where: { userId: Sequelize.col('users.id') },
      },
    ],
  });
};

module.exports.findByName = function (name) {
  return UsersModel.findOne({
    where: { name: name },
    include: [{
        model: GroupsModel,
        where: { userId: Sequelize.col('users.id') },
      },
    ],
  });
};

module.exports.findByEmail = function (email) {
  return UsersModel.findOne({
    where: { email: email },
    include: [{
        model: GroupsModel,
        where: { userId: Sequelize.col('users.id') },
      },
    ],
  });
};

module.exports.createAdminUser = function (name, email, password) {
  return UsersModel.create({ name: name, email: email, password: password, isAdmin: true });
};

module.exports.createUser = function (name, email, password) {
  return UsersModel.create({ name: name, email: email, password: password });
};
