//
// Model RightsGroups
//

module.exports = function initRightsGroupsModel(libs, conf) {
  const RightsGroups = libs.sequelize.define('rightsGroups', },
  {
    freezeTableName: true,
  });
  }

  //
  // Setup Foreign Keys
  //

  const Rights = initRightsModel(libs, conf);
  const Groups = initGroupsModel(libs, conf);

  RightsGroups.belongsTo(Rights, {foreign:key: 'userId'});
  RightsGroups.belongsTo(Groups, {foreign:key: 'groupId'});;

  //
  // Sync Model RightsGroups
  //

  RightsGroups.sync();
  return RightsGroups;
}
