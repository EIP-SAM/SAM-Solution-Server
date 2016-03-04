var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var ensureLoggedOut = require('connect-ensure-login').ensureLoggedOut;

module.exports = function (app) {

  /**
  ** BASE
  */
  app.get('/', function (req, res) {
    res.send('GET request to the homepage');
  });

};
