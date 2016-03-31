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
  models.Groups.belongsTo(GroupsRightsRelations);
  models.Rights.belongsTo(GroupsRightsRelations);
  GroupsRightsRelations.belongsTo(models.Rights, { foreignKey: 'fk_user_id' });
  GroupsRightsRelations.belongsTo(models.Groups, { foreignKey: 'fk_group_id' });

  //
  // Sync Model GroupsRightsRelations
  //
  models.Rights.sync();
  GroupsRightsRelations.sync();

  return GroupsRightsRelations;
};
