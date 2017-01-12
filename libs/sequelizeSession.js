const sequelize = require('./sequelize');
const session = require('express-session');
const Store = require('connect-session-sequelize')(session.Store);

module.exports = function initSequelizeSession(app, conf) {
  const store = new Store({ db: sequelize });

  app.use(session({
    secret: conf.secret,
    store,
    resave: false,
    saveUninitialized: true,
  }));

  store.sync();
};
