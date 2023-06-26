const { app, BrowserWindow } = require('electron');
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    // fullscreen: true,
    width: 1300,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true, 
      worldSafeExecuteJavaScript: true
    }
  })

  win.webContents.openDevTools();

  win.loadFile('pages/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
});