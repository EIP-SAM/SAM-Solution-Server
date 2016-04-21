var express = require('express');

module.exports = function initBaseRoutes(app, conf, passport) {
  //
  //// GET requests

  // Public static folder access
  app.use(express.static(conf.rootFolder + '/public'));

  // Main page
  app.get('/', function (req, res) {
    res.redirect('/index.html');
  });

  app.get('/index.html',
    function (req, res) {
      res.render('index');
    }
  );

};
