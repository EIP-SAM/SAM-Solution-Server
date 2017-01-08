const express = require('express');

module.exports = function initBaseRoutes(app, conf, passport) {
  // Public static folder access
  app.use(express.static(`${conf.rootFolder}/webapp/build`));
};
