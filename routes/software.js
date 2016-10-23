//
// Route Software
//

var softwareController = require('../controllers/software');

module.exports = function initSaveRoutes(app) {

  app.get('/api/logged-in/admin/software', function (req, res) {
    softwareController.launchAnInstall().then(function(users) {
      res.json(users);
    })
  });
};
