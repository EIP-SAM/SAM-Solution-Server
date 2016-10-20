const Sequelize = require('sequelize');
const UsersModel = require('../models/users');
const GroupsModel = require('../models/groups');
require('../models/usersGroupsRelations');
const GroupsAdapter = require('./groups');
const socketIo = require('../libs/socket-io');

module.exports.findAll = function () {
  return UsersModel.findAll({
    attributes: ['id', 'name', 'email', 'isAdmin'],
    order: [['id', 'ASC']],
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

module.exports.findByIdWithoutGroupRelation = function (id) {
  return UsersModel.findOne({ where: { id: id } });
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
    module.exports.findByIdWithoutGroupRelation(user).then(function (foundUser) {
      if (foundUser) {
        group.addUsers([foundUser]).then(function (group) {
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
    const brokenUsers = [];

    if (group.users) {
      group.users.forEach(function (user) {
        module.exports.findById(user.id).then(function (user) {
          if (user.groups.length === 1) {
            brokenUsers.push(user);
          }
        });
      });
    }

    group.setUsers([]).then(function () {
      if (brokenUsers.length > 0) {
        var i = 0;

        brokenUsers.forEach(function (brokenUser) {
          GroupsAdapter.reassignGroupToUser(brokenUser, brokenUser.isAdmin ? 'admin_default' : 'user_default').then(function () {
            if (++i >= brokenUsers.length) {
              fulfill(group);
            }
          });
        });
      } else {
        fulfill(group);
      }
    });

  });
};

module.exports.reassignUsersToGroup = function (group, users) {
  return new Promise(function (fulfill, reject) {
    module.exports.unlinkAllUsersOfGroup(group).then(function (group) {
      var i = 0;

      users.forEach(function (user) {
        if (typeof user !== 'number') {
          reject('Invalid user id');
        }

        module.exports.linkGroupToUser(group, user).then(function (group, user) {
          if (++i >= users.length) {
            fulfill(group);
          }
        });
      });
    });
  });
};

module.exports.getNbrUserConnectedDeamon = function () {
  return new Promise(function (fulfill, reject) {
    fulfill(socketIo.getNbrUserConnected(socketIo.CLIENT_TYPE_DEAMON));
  });
};
