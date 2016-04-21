var sequelize = require('./sequelize');

module.exports = function initSequelizeSession(app, conf) {
  var session = require('express-session');
  var Store = require('connect-session-sequelize')(session.Store);
  var store = new Store({ db: sequelize });

  app.use(session({
    secret: conf.secret,
    store: store,
    resave: false,
    saveUninitialized: true,
  }));

  store.sync();
};
