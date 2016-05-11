var express = require('express');

module.exports = function initBaseRoutes(app, conf, passport) {
  //
  //// GET requests

  // Public static folder access
  app.use(express.static(conf.rootFolder + '/public'));

  // Main page
  app.get('/', function (req, res) {
    res.redirect('/users_and_rights/login_signup');
  });
};
