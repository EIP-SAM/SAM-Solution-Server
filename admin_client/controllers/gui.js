module.exports = function initHttpRoutes(conf, libs) {
  var mainWindow = null;

  libs.app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform != 'darwin') {
      libs.app.quit();
    }
  });

  libs.app.on('ready', function () {
    mainWindow = new libs.BrowserWindow({
      width: conf.debug ? 1200 : 800,
      height: 600,
      center: true,
    });

    if (conf.debug) {
      mainWindow.webContents.openDevTools();
    }

    mainWindow.loadURL('http://' + conf.server.hostname + ':' + conf.server.port);

    mainWindow.on('closed', function () {
      mainWindow = null;
    });
  });
};
