var GroupsAdapter = null;

module.exports.init = function (libs, conf, managers, adapters) {
  GroupsAdapter = adapters.Groups;

  initUserDefaultGroup();
  initAdminDefaultGroup();
};

function initUserDefaultGroup() {
  return GroupsAdapter.findByName('user_default')
  .then(function (group) {
    if (!group) {
      GroupsAdapter.createGroup('user_default', 0);
    }
  });
}

function initAdminDefaultGroup() {
  return GroupsAdapter.findByName('admin_default')
  .then(function (group) {
    if (!group) {
      GroupsAdapter.createGroup('admin_default', 0);
    }
  });
}
