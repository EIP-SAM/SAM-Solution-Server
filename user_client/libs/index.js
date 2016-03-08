module.exports = function initNodeLibraries(conf) {
  const libs = {};

  require('./electron')(libs, conf);

  return libs;
};
