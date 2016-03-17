const Sequelize = require('sequelize');
const database = require('database.js');

var Groups = database.db.define('groups', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
  rights: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: false,
  },
}, { freezeTableName: true });

var findById = function (id) {
  Groups.findOne({ where: { id: id } });
};

var findByName = function (name) {
  Groups.findOne({ where: { name: name } });
};

var createGroup = function (name, rights) {
  Groups.create({ name: name, rights: rights });
};

exports.findById = findById;
exports.findByName = findByGroup;
exports.createGroup = createGroup;
