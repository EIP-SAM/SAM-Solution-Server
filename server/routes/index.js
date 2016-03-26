module.exports = function initRoutes(libs, conf, managers) {
  const routes = {};

  require('./routes')(libs, conf, managers);

  return routes;
};
