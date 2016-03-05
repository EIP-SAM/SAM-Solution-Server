module.exports = function initBaseRoutes(app, ensureLoggedIn, ensureLoggedOut) {

  /**
  ** BASE
  */
  app.get('/', function (req, res) {
    res.send('GET request to the homepage');
  });

};
