//
// Route Software
//

var softwareController = require('../controllers/software');

module.exports = function initSaveRoutes(app) {

  app.get('/api/logged-in/admin/software', function (req, res) {
    softwareController.allUsersInfo().then(function(infos) {
      res.json(infos);
    })
  });
};
