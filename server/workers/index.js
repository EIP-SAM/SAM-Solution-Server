module.exports = function initWorkers(libs, conf) {
  const workers = {};

  require('./git')(workers, libs, conf);

  return workers;
};
