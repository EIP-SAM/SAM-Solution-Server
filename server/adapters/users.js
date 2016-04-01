var UsersModel = null;

module.exports.init = function (libs, conf, models, workers) {
  UsersModel = models.Users;
};

function findById(id) {
  return UsersModel.findOne({ where: { id: id } });
}

function findByName(name) {
  return UsersModel.findOne({ where: { name: name } });
}

function findByEmail(email) {
  return UsersModel.findOne({ where: { email: email } });
}

function createUser(name, email, password) {
  return UsersModel.create({ name: name, email: email, password: password });
}

function initAdminUser() {
  return UsersModel.sync().then(function () {
    findByName('admin').then(function (user) {
      if (!user) {
        createUser('admin', 'admin@example.com', 'admin');
      }
    });
  });
}

module.exports.findById = findById;
module.exports.findByName = findByName;
module.exports.findByEmail = findByEmail;
module.exports.createUser = createUser;
module.exports.initAdminUser = initAdminUser;
