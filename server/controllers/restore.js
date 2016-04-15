//
// Controller Restoration
//
module.exports = function initRestoreController(managers, controllers) {

  //
  //
  //
  controllers.launchRestore = function (req, res) {
    const userId = req.body.userId; // Be able to change
    const saveId = req.body.saveId; // Be able to change

    //
    // Loop with group of User.
    // One request per UserId.
    // Is a user inevitably part of a group ?
    // Yes then request to groupUser to get all UserId.
    // No then request to groupUser to get all UserId or if alone request to User to get Id.
    //
    managers.launchRestore(userId, saveId);
    res.redirect('/restore');
  };

  //
  // Get restodeId and launch function startRestore in the manager
  //
  controllers.startRestore = function (req, res) {
    const restoreId = req.body.restoreId;
    managers.startRestore(restoreId);
    res.redirect('/restore');
  };

  //
  // Get restodeId and launch function restoreFinish in the manager
  //
  controllers.restoreFinish = function (req, res) {
    const restoreId = req.body.restoreId;
    managers.restoreFinish(restoreId);
    res.redirect('/restore');
  };

  //
  // Get restodeId and launch function restoreSuccess in the manager
  //
  controllers.restoreSuccess = function (req, res) {
    const restoreId = req.body.restoreId;
    managers.restoreSuccess(restoreId);
    res.redirect('/restore');
  };

  controllers.restoreFail = function (req, res) {

  };
};
