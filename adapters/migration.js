//
// Migration adapter
//
const Sequelize = require('sequelize');
const UsersModel = require('../models/users');
const MigrationModel = require('../models/migration');
const ImageModel = require('../models/image');

//
// Get all the migration order by migrationDate DESC
//
module.exports.getMigrations = () => MigrationModel.findAll({
  order: [['migrationDate', 'DESC']],
  include: [{
    model: UsersModel,
    as: 'user',
    attributes: ['id', 'name', 'email', 'isAdmin'],
    where: { userId: Sequelize.col('user.id') },
  }, {
    model: ImageModel,
    as: 'image',
    attributes: ['id', 'name', 'operatingSystem', 'version'],
    where: { imageId: Sequelize.col('image.id') },
  }],
});

//
// Get migration by his id
//
module.exports.getMigrationById = migrationId => MigrationModel.findById(migrationId, {
  order: [['migrationDate', 'DESC']],
  include: [{
    model: UsersModel,
    as: 'user',
    attributes: ['id', 'name', 'email', 'isAdmin'],
    where: { userId: Sequelize.col('user.id') },
  }, {
    model: ImageModel,
    as: 'image',
    attributes: ['id', 'name', 'operatingSystem', 'version'],
    where: { imageId: Sequelize.col('image.id') },
  }],
});

//
// Get migration order by filter
// @parameters:
// - filterObj, object containing:
//   - filterObj.modelName, if there is a foreignKey you have to put the model name
//   - filterObj.name, name of the filter
//   - filterObj.order, ASC or DESC
//
module.exports.getMigrationOrderByFilter = (filterObj) => {
  const orderObj = [];

  switch (filterObj.modelName) {
    case 'user':
      orderObj.push(UsersModel);
      break;
    case 'image':
      orderObj.push(ImageModel);
      break;
    default:
      break;

  }
  orderObj.push(filterObj.name);
  orderObj.push(filterObj.order);

  return MigrationModel.findAll({
    order: [orderObj],
    include: [{
      model: UsersModel,
      as: 'user',
      attributes: ['id', 'name', 'email', 'isAdmin'],
      where: { userId: Sequelize.col('user.id') },
    }, {
      model: ImageModel,
      as: 'image',
      attributes: ['id', 'name', 'operatingSystem', 'version'],
      where: { imageId: Sequelize.col('image.id') },
    }],
  });
};

//
// Get migrations group by status
//
module.exports.getMigrationsGroupByStatus = () => MigrationModel.count({
  group: 'status',
  attributes: ['status'],
});

//
// Create a migration
// @properties:
// - userId
// - imageId
// - migrationDate
// - status
// - comment
//
module.exports.createMigration = migrationObj => MigrationModel.create(migrationObj);

//
// Edit migration by his id
// @properties:
// - migrationId
// - userId
// - imageId
// - migrationDate
// - status
// - comment
// Except for the migrationId, each property can be undefined
//
module.exports.editMigrationById = migrationObj => MigrationModel.update(migrationObj, {
  where: { id: migrationObj.migrationId },
});

//
// Delete migration by id
//
module.exports.deleteMigrationById = migrationId => MigrationModel.destroy({
  where: { id: migrationId },
});

//
// Get planned migration before now
// @parameters:
// - date
//
module.exports.getPlannedMigrationBeforeNow = () => MigrationModel.findAll({
  include: [{
    model: UsersModel,
    as: 'user',
    attributes: ['id', 'name', 'email', 'isAdmin'],
    where: { userId: Sequelize.col('user.id') },
  }, {
    model: ImageModel,
    as: 'image',
    attributes: ['id', 'name', 'fileName', 'operatingSystem', 'version'],
    where: { imageId: Sequelize.col('image.id') },
  }],
  where: {
    status: 'planned',
    migrationDate: {
      $lte: new Date(),
    },
  },
});
