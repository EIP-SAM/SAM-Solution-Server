const Sequelize = require('sequelize');
const database = require('database.js');

var Users = database.db.define('users', {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
}, { freezeTableName: true });

var findById = function (id) {
  Users.findOne({ where: { id: id } });
};

var findByEmail = function (email) {
  Users.findOne({ where: { email: email } });
};

var createUser = function (firstname, lastname, email, password) {
  Users.create({ firstname: firstname, lastname: lastname, email: email, password: password });
};

exports.findById = findById;
exports.findByEmail = findByEmail;
exports.createUser = createUser;
