const { app, BrowserWindow } = require('electron');
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    fullscreen: true, // Set fullscreen to true
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.webContents.openDevTools();

  win.loadFile('pages/index.html')
}

app.whenReady().then(() => {
  createWindow()

  console.log("log");
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
});