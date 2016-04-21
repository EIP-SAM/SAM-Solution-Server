module.exports = function initFlash(libs) {
  const flash = require('connect-flash');
  libs.app.use(flash());
  libs.app.use(function (req, res, next) {
    res.locals.flash = req.flash('msg');
    next();
  });
};
