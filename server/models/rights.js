const Sequelize = require('sequelize');
const sequelize = require('../libs/sequelize');
const Groups = require('./groups');

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
Groups.hasMany(Rights);

Rights.sync();

module.exports = Rights;
