//
// Available modes
// They represent the rights of a user, through its groups
//
const enumMode = {
  SIMPLE: 1,
  ADVANCED: 2,
};
module.exports.enumMode = enumMode;

//
// Available modules where a mode can be applied
//
const enumModules = {
  SAVE_AND_RESTORE: 'saveAndRestore',
  MIGRATION: 'migration',
  SOFTWARE_PACKAGES: 'softwarePackages',
};
module.exports.enumModules = enumModules;

//
// Let a developer able to ask for the higher right (mode) available for a given
// user and a module
// Returns an `enumMode` if okay, or `null` if there is an error
// Call example:
//   usersAdapter.findByName('foobar').then(function (user) {
//      getModuleRightForUser(enumModules.SAVE_AND_RESTORE, user);
//    }
//  });
//
module.exports.getModuleRightForUser = function (moduleName, user) {
  if (moduleName != enumModules.SAVE_AND_RESTORE &&
    moduleName != enumModules.MIGRATION &&
    moduleName != enumModules.SOFTWARE_PACKAGES) {
    return null;
  }

  var mode = 0;
  user.groups.forEach(function (group) {
    const moduleMode = group[moduleName + 'Mode'];
    mode = moduleMode > mode ? moduleMode : mode;
  });

  if (mode == enumMode.SIMPLE || mode == enumMode.ADVANCED) {
    return mode;
  }

  return null;
};
