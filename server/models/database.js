const Sequelize = require('sequelize');
const database = new Sequelize('sam_solution', 'name', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

exports.sequelize = Sequelize;
exports.db = database;
