const { BrowserWindow } = require('electron');

const { args } = require('../functions/receiveArguments');

const config = {
  width: 800,
  height: 600,
  autoHideMenuBar: true,
  webPreferences: {
    nodeIntegration: true,
  }
};

const createConfigWindow = () => {
  const win = new BrowserWindow(config);
  const watching = args();
    
  if(watching === '.')
    win.loadFile('./public/index.html');
  else
    win.loadURL(`http://${args()}/`);
}

module.exports = { createConfigWindow };
