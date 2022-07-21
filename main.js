const { app, globalShortcut } = require('electron');

const { createConfigWindow } = require('./src/config/window.config');
const openDevTools = require('./src/functions/openDevTools');

class Applicaton {
  win;

  constructor() {
    this.running();
  }

  createWindow() {
    createConfigWindow();
  }

  createShortcuts() {
    globalShortcut.register('CmdOrCtrl+shift+i', openDevTools);
    globalShortcut.register('f12', openDevTools);
  }

  running() {
    app.whenReady()
      .then(() => this.createWindow())
      .then(() => this.createShortcuts());

    app.on('window-all-closed', () => {
      if(process.platform !== 'darwin') app.quit();
    });

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        this.createWindow();
      }
    });
  }
}

new Applicaton();
