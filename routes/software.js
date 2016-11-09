//
// Route Software
//

var softwareController = require('../controllers/software');

module.exports = function initSoftwareRoutes(app) {

  app.get('/api/logged-in/admin/software', function (req, res) {
    softwareController.allUsersInfo(req, res).then(function(infos) {
      res.json(infos);
    })
  });

  app.get('/api/logged-in/software_by_user', function (req, res) {
    softwareController.allSoftwaresByUser(req, res);
  });

  app.get('/api/logged-in/search_software', function (req, res) {
    softwareController.searchSoftwareByUser(req, res);
  });

  app.get('/api/logged-in/install_software', function (req, res) {
    softwareController.installSoftwareByUser(req, res);
  });

  app.get('/api/logged-in/remove_software', function (req, res) {
    softwareController.removeSoftwareByUser(req, res);
  });
};
