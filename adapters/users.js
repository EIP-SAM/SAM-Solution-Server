const Sequelize = require('sequelize');
const UsersModel = require('../models/users');
const GroupsModel = require('../models/groups');
require('../models/usersGroupsRelations');
const GroupsAdapter = require('./groups');
const socketIo = require('../libs/socket-io');

module.exports.findAll = () => UsersModel.findAll({
  attributes: ['id', 'name', 'email', 'isAdmin'],
  order: [['id', 'ASC']],
  include: [{
    model: GroupsModel,
    where: { userId: Sequelize.col('users.id') },
  },
  ],
});

module.exports.findById = id => UsersModel.findOne({
  where: { id },
  include: [{
    model: GroupsModel,
    where: { userId: Sequelize.col('users.id') },
  },
  ],
});

module.exports.findByIdWithoutGroupRelation = id => UsersModel.findOne({ where: { id } });

module.exports.findByName = name => UsersModel.findOne({
  where: { name },
  include: [{
    model: GroupsModel,
    where: { userId: Sequelize.col('users.id') },
  },
  ],
});

module.exports.findByEmail = email => UsersModel.findOne({
  where: { email },
  include: [{
    model: GroupsModel,
    where: { userId: Sequelize.col('users.id') },
  },
  ],
});

module.exports.createAdminUser = (name, email, password) => UsersModel.create({ name, email, password, isAdmin: true });

module.exports.createUser = (name, email, password) => UsersModel.create({ name, email, password, isAdmin: false });

module.exports.linkGroupToUser = (group, user) => new Promise((fulfill, reject) => {
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

module.exports.unlinkAllUsersOfGroup = group => new Promise((fulfill, reject) => {
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

module.exports.reassignUsersToGroup = (group, users) => new Promise((fulfill, reject) => {
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

module.exports.getNbrUserConnectedDeamon = () => new Promise((fulfill, reject) => {
  fulfill(socketIo.getNbrUserConnected(socketIo.CLIENT_TYPE_DEAMON));
});
