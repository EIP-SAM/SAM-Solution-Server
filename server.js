// retrieve configuration from main config file
const config = require('./config/base.config.json');

config.rootFolder = __dirname;

const app = require('./libs/express')(config);
const logger = require('./libs/bunyan');
const SocketIO = require('./libs/socket-io');

require('./models/init')().then(() => {
  require('./routes')(app, config);
  const server = app.listen(config.port, () => {
    logger.info(`Listening on port ${config.port}`);
  });

  SocketIO.init(server);
}).catch((err) => {
  console.log(err);
});
