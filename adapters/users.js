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
    where: { id },
    include: [{
      model: GroupsModel,
      where: { userId: Sequelize.col('users.id') },
    },
    ],
  });
};

module.exports.findByIdWithoutGroupRelation = function (id) {
  return UsersModel.findOne({ where: { id } });
};

module.exports.findByName = function (name) {
  return UsersModel.findOne({
    where: { name },
    include: [{
      model: GroupsModel,
      where: { userId: Sequelize.col('users.id') },
    },
    ],
  });
};

module.exports.findByEmail = function (email) {
  return UsersModel.findOne({
    where: { email },
    include: [{
      model: GroupsModel,
      where: { userId: Sequelize.col('users.id') },
    },
    ],
  });
};

module.exports.createAdminUser = function (name, email, password) {
  return UsersModel.create({ name, email, password, isAdmin: true });
};

module.exports.createUser = function (name, email, password) {
  return UsersModel.create({ name, email, password, isAdmin: false });
};

module.exports.linkGroupToUser = function (group, user) {
  return new Promise((fulfill, reject) => {
    module.exports.findByIdWithoutGroupRelation(user).then((foundUser) => {
      if (foundUser) {
        group.addUsers([foundUser]).then((group) => {
          fulfill(group, foundUser);
        });
      } else {
        fulfill(group, null);
      }
    });
  });
};

module.exports.unlinkAllUsersOfGroup = function (group) {
  return new Promise((fulfill, reject) => {
    const brokenUsers = [];

    if (group.users) {
      group.users.forEach((user) => {
        module.exports.findById(user.id).then((user) => {
          if (user.groups.length === 1) {
            brokenUsers.push(user);
          }
        });
      });
    }

    group.setUsers([]).then(() => {
      if (brokenUsers.length > 0) {
        let i = 0;

        brokenUsers.forEach((brokenUser) => {
          GroupsAdapter.reassignGroupToUser(brokenUser, brokenUser.isAdmin ? 'admin_default' : 'user_default').then(() => {
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
  return new Promise((fulfill, reject) => {
    module.exports.unlinkAllUsersOfGroup(group).then((group) => {
      let i = 0;

      if (users.length > 0) {
        users.forEach((user) => {
          if (typeof user !== 'number') {
            reject('Invalid user id');
          }

          module.exports.linkGroupToUser(group, user).then((group, user) => {
            if (++i >= users.length) {
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

module.exports.getNbrUserConnectedDeamon = function () {
  return new Promise((fulfill, reject) => {
    fulfill(socketIo.getNbrUserConnected(socketIo.CLIENT_TYPE_DEAMON));
  });
};
