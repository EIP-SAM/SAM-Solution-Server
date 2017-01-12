// retrieve configuration from main config file
const config = require('./config/base.config.json');

config.rootFolder = __dirname;

const app = require('./libs/express')(config);
const logger = require('./libs/bunyan');
const SocketIO = require('./libs/socket-io');

const migrationController = require('./controllers/migration');

const generalRouter = require('./routes');

require('./models/init')().then(() => {
  generalRouter(app, config);
  const server = app.listen(config.port, () => {
    logger.info(`Listening on port ${config.port}`);
  });

  SocketIO.init(server);
  migrationController.initCheckMigration();
}).catch((err) => {
  logger.error(`Error initializing server, exiting : ${err}`);
});
