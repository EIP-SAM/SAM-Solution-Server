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
  return UsersModel.create({ name: name, email: email, password: password, isAdmin: false });
};

module.exports.linkGroupToUser = function (group, user) {
  return new Promise(function (fulfill, reject) {
    console.log('before find');
    module.exports.findById(user).then(function (foundUser) {
      console.log('user found');

      if (foundUser) {
        console.log('user found is valid');
        group.addUsers([foundUser]).then(function (group) {
          console.log('user added');
          fulfill(group, foundUser);
        });
      } else {
        fulfill(group, null);
      }

    });
  });
};

module.exports.unlinkAllUsersOfGroup = function (group) {
  return new Promise(function (fulfill, reject) {
    group.setUsers([]).then(function () {
      fulfill(group);
    });
  });
};

module.exports.reassignUsersToGroup = function (group, users) {
  return new Promise(function (fulfill, reject) {
    console.log('before unlink');
    module.exports.unlinkAllUsersOfGroup(group).then(function (group) {
      var i = 0;

      console.log('before for each');
      users.forEach(function (user) {
        console.log('before link');
        module.exports.linkGroupToUser(group, user).then(function (group, user) {
          console.log('before if');
          if (++i >= users.length) {
            console.log('out');
            fulfill(group);
          }
        });
      });
    });
  });
};
