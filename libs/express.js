const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const gitMiddleware = require('./expressGit');
const sequelizeSession = require('./sequelizeSession');

module.exports = function initExpress(conf) {
  // init express
  const app = express();

  // init global middleware
  app.use(cookieParser(conf.secret));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(helmet());
  app.use('/git', gitMiddleware());

  app.use((req, res, next) => {
    if (req.get('origin')) {
      res.setHeader('Access-Control-Allow-Origin', req.get('origin'));
    }
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  sequelizeSession(app, conf);
  return app;
};
