const flash = require('connect-flash');

module.exports = function initFlash(app) {
  app.use(flash());
  app.use((req, res, next) => {
    res.locals.flash = req.flash('msg');
    next();
  });
};
