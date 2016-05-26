var express = require('express');

module.exports = function initBaseRoutes(app, conf, passport) {
  //
  //// GET requests

  // Public static folder access
  app.use(express.static(conf.rootFolder + '/public/build'));
};
