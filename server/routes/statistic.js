/*
** Statistic module routes
*/

module.exports = function initRestoreRoutes(app, ensureLoggedIn, ensureLoggedOut, controllers) {

  app.get('/statistic', function(req, res) {
    controllers.testStatistic();
    res.render('statistic_main_view.ejs');
  });

};
