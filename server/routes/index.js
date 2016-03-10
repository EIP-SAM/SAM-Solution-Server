const ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
const ensureLoggedOut = require('connect-ensure-login').ensureLoggedOut;

module.exports = function initRoutes(libs, conf) {
  const routes = {};

  libs.app.use(libs.express.static(conf.rootFolder + '/public'));

  require('./routes')(libs.app, ensureLoggedIn, ensureLoggedOut);

  return routes;
};
