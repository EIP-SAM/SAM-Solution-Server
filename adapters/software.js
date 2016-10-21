//
// Adapter Software
//
UserModel = require('../models/users');

//
// Get all users
//
module.exports.allUsers = function () {
  return UserModel.findAll({
    include: [{
      model: GroupModel,
    }],    
  });
}
