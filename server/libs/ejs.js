module.exports = function initEjs(libs, conf) {
  libs.app.set('views', conf.rootFolder + '/views');
  libs.app.set('view engine', 'ejs');
};
