const GroupsAdapter = require('../adapters/groups');
const rightsManager = require('./rights');

const enumMode = rightsManager.enumMode;

initUserDefaultGroup();
initAdminDefaultGroup();

function initUserDefaultGroup() {
  return GroupsAdapter.findByName('user_default')
  .then(function (group) {
    if (!group) {
      GroupsAdapter.createGroup('user_default', enumMode.ADVANCED, enumMode.SIMPLE, enumMode.SIMPLE);
    }
  });
}

function initAdminDefaultGroup() {
  return GroupsAdapter.findByName('admin_default')
  .then(function (group) {
    if (!group) {
      GroupsAdapter.createGroup('admin_default', enumMode.ADVANCED, enumMode.ADVANCED, enumMode.ADVANCED);
    }
  });
}

module.exports.retrieveAllGroups = function (req, res) {
  return new Promise(function (fulfill, reject) {
    GroupsAdapter.findAll().then(function (groups) {
      groups.lastOperation = req.session.lastOperation;
      req.session.lastOperation = null;
      req.session.save(function () {
        fulfill(groups);
      });
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
