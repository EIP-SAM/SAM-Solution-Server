var Sequelize = require('sequelize');
var sequelize = require('../libs/sequelize');

//
// Model rights
//
const Rights = sequelize.define('rights', {
  data: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: false,
  },
}, {
  freezeTableName: true,
});

//
// Setup Relations
//
models.Groups.hasMany(Rights);

module.exports = Rights;
