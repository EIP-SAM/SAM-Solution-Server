module.exports = function initUsersController(libs, conf, managers, adapters) {
  const usersManager = managers.users;
  const passportManager = managers.passport;

  usersManager.init(libs, conf, managers, adapters);
  passportManager.init(libs, conf, managers, adapters);
};
