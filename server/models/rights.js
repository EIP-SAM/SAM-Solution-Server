const Sequelize = require('sequelize');
const database = require('database.js');

var Rights = database.db.define('rights', {
  data: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
}, { freezeTableName: true });

var findById = function (id) {
  Rights.findOne({ where: { id: id } });
};

var createRight = function (data) {
  Rights.create({ data: data });
};

exports.findById = findById;
exports.createRight = createRight;
