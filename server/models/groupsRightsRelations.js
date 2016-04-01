//
// Model GroupsRightsRelations
//
module.exports = function initGroupsRightsRelationsModel(libs, conf, models) {
  const GroupsRightsRelations = libs.sequelize.define('groups_rights_relations', {}, {
    freezeTableName: true,
  });

  //
  // Setup Foreign Keys
  //
  models.Groups.belongsToMany(models.Users, { through: 'groups_rights_relations', foreignKey: 'fk_group_id' });
  models.Rights.belongsToMany(models.Groups, { through: 'groups_rights_relations', foreignKey: 'fk_right_id' });

  //
  // Sync Model GroupsRightsRelations
  //
  GroupsRightsRelations.sync();
  models.Groups.sync();
  models.Rights.sync();

  return GroupsRightsRelations;
};
