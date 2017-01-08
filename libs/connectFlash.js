module.exports = function initFlash(app) {
  const flash = require('connect-flash');
  app.use(flash());
  app.use((req, res, next) => {
    res.locals.flash = req.flash('msg');
    next();
  });
};
