const { contextBridge, ipcRenderer } = require('electron');
const { dialog } = require('electron');
const os = require('os')

contextBridge.exposeInMainWorld('electronAPI', {
  getDirectoryPath: () => {
    return dialog.showOpenDialog({
      properties: ['openDirectory']
    });
  }
});

contextBridge.exposeInMainWorld('os', {
  homedir: () => os.homedir(),
});

// contextBridge.exposeInMainWorld('electronAPI', {
//   selectDirectory: () => {
//     return ipcRenderer.invoke('select-directory');
//   }
// });
