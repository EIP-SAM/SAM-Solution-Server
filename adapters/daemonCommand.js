const daemonCmdModel = require('../models/daemonCommand');

//
// Save a command in DB
//
module.exports.create = function saveDaemonCommand(userId, commandName, content) {
  daemonCmdModel.create({
    userId,
    commandName,
    content: JSON.stringify(content),
  }).catch((err) => {
    console.log(err);
  });
};

//
// Get commands by userId
//
module.exports.getCommandById = function (userId) {
  return daemonCmdModel.findAll({
    where: { userId },
  });
};

//
// Delete a command in DB
//
module.exports.deleteById = function deleteById(id) {
  daemonCmdModel.destroy({
    where: {
      id,
    },
  });
};
