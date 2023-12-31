const { app, BrowserWindow } = require('electron');
const path = require('path');

process.env.NODE_ENV = 'development';

const isDev = process.env.NODE_ENV !== 'production';

const createWindow = () => {
  const win = new BrowserWindow({
    // fullscreen: true,
    width: 1300,
    height: 800,
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
    }
  });

  isDev ? win.webContents.openDevTools() : null;

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

// Function to run a command
// function runCommand(command) {
//   exec(command, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error executing command: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       console.error(`Command execution error: ${stderr}`);
//       return;
//     }
//     console.log(`Command output: ${stdout}`);
//   });
// }

// // Handle button click event
// function handleClick() {
//   const command = 'ls -l'; // Replace with your desired command
//   runCommand(command);
// }

// // Event listener for button click
// document.addEventListener('DOMContentLoaded', () => {
//   const button = document.getElementById('runButton');
//   button.addEventListener('click', handleClick);
// });