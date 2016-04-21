//
// Controller Restoration
//
module.exports = function initRestoreController(managers, controllers) {

  //
  // Called when a restoration is created
  //
  controllers.createRestore = function (req, res) {
    managers.createRestore(req, res);
  };

  //
  // Called when a restoration is launched
  //
  controllers.startRestore = function (req, res) {
    managers.startRestore(req, res);
  };

  //
  // Called when a restoration is finished
  //
  controllers.restoreFinish = function (req, res) {
    managers.restoreFinish(req, res);
  };

  //
  // Called when a restoration has succeeded
  //
  controllers.restoreSuccess = function (req, res) {
    return managers.restoreSuccess(req, res);
  };

};
