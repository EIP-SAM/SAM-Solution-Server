let passport = require('../libs/passport');
const routes = require('./routes');
const usersAndRights = require('./usersAndRights');
const statistic = require('./statistic');
const restore = require('./restore');
const save = require('./save');
const log = require('./log');
const migration = require('./migration');
const reboot = require('./reboot');
const image = require('./image');
const notification = require('./notification');

module.exports = function initRoutes(app, conf) {
  passport = passport(app);

  routes(app, conf, passport);
  usersAndRights(app, conf, passport);
  statistic(app, conf);
  restore(app);
  save(app);
  log(app);
  migration(app);
  reboot(app);
  image(app);
  notification(app);
};
