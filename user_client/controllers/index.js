module.exports = function runMainController(conf, libs) {
  const controllers = {};

  require('./gui')(conf, libs);
};
