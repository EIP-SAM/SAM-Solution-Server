// retrieve configuration from main config file
const config = require('./config/base.config.json');

config.rootFolder = __dirname;

const app = require('./libs/express')(config);
const logger = require('./libs/bunyan');
const SocketIO = require('./libs/socket-io');

const migrationController = require('./controllers/migration');


require('./models/init')().then(() => {
  const generalRouter = require('./routes'); // eslint-disable-line global-require
  generalRouter(app, config);
  const server = app.listen(config.port, () => {
    logger.info(`Listening on port ${config.port}`);
  });

  SocketIO.init(server);
  migrationController.initCheckMigration();
}).catch((err) => {
  logger.error(`Error initializing server, exiting : ${err}`);
});
