var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
var ensureLoggedOut = require('connect-ensure-login').ensureLoggedOut;

module.exports = function initRoutes(app) {
  const routes = {};

  require('./routes')(app, ensureLoggedIn, ensureLoggedOut);

  return routes;
};
