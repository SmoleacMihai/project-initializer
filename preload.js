// const { contextBridge, ipcRenderer } = require('electron');
// const { dialog } = require('electron');
// const os = require('os')

// contextBridge.exposeInMainWorld('electronAPI', {
//   getDirectoryPath: () => {
//     return dialog.showOpenDialog({
//       properties: ['openDirectory']
//     });
//   }
// });

// contextBridge.exposeInMainWorld('os', {
//   homedir: () => os.homedir(),
// });

const { contextBridge, ipcRenderer, dialog } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  selectDirectory: () => {
    const result = dialog?.showOpenDialog({
      properties: ['openDirectory']
    });

    if (!result.canceled && result.filePaths.length > 0) {
      return result.filePaths[0];
    }
    
    return null;
  }
});

// contextBridge.exposeInMainWorld('electronAPI', {
//   selectDirectory: () => {
//     return ipcRenderer.invoke('select-directory');
//   }
// });
