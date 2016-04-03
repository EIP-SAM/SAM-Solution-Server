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

module.exports.retrieveAllGroups = function () {
  return new Promise(function (fulfill, reject) {
    const groups = {};

    groups.lastOperation = req.session.lastOperation;
    req.session.lastOperation = null;
    req.session.save(function () {
      fulfill(groups);
    });
  });
};

module.exports.updateGroups = function (params) {
  return function (req, res) {
    console.log('updateGroups');
    req.session.lastOperation = 'updateGroups';
    req.session.save(function () {
      res.redirect(params.successRedirect);
    });
  };
};

module.exports.createGroups = function (params) {
  return function (req, res) {
    console.log('createGroups');
    req.session.lastOperation = 'createGroups';
    req.session.save(function () {
      res.redirect(params.successRedirect);
    });
  };
};

module.exports.deleteGroups = function (params) {
  return function (req, res) {
    console.log('deleteGroups');
    req.session.lastOperation = 'deleteGroups';
    req.session.save(function () {
      res.redirect(params.successRedirect);
    });
  };
};
