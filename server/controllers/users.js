module.exports = function initUsersController(libs, conf, managers, adapters) {
  const usersManager = managers.users;
  const groupsManager = managers.groups;
  const rightsManager = managers.rights;
  const passportManager = managers.passport;

  rightsManager.init(libs, conf, managers, adapters);
  groupsManager.init(libs, conf, managers, adapters);
  usersManager.init(libs, conf, managers, adapters);
  passportManager.init(libs, conf, managers, adapters);
};
