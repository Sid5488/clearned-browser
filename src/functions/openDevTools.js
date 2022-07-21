const { BrowserWindow } = require("electron");

/**
 * This function open DevTools for debugging.
 * @win BrowserWindow
 */
module.exports = (win) => {
  if (!(win instanceof BrowserWindow)) {
    throw new Error("It's not a browser window");
  }

  win.webContents.openDevTools();
};
