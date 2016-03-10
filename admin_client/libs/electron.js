module.exports = function initElectron(libs, conf) {
  libs.electron = require('electron');

  libs.app = libs.electron.app;
  libs.BrowserWindow = libs.electron.BrowserWindow;
};
