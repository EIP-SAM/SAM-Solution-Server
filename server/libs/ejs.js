module.exports = function initEjs(app, conf) {
  app.set('views', conf.rootFolder + '/views');
  app.set('view engine', 'ejs');
};
