module.exports = function initSequelizeSession(libs, conf) {
  libs.session = require('express-session');
  libs.Store = require('connect-session-sequelize')(libs.session.Store);
  libs.store = new libs.Store({ db: libs.sequelize });

  libs.app.use(libs.session({
    secret: conf.secret,
    store: libs.store,
    resave: false,
    saveUninitialized: true,
  }));

  libs.store.sync();
};
