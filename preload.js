const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  selectDirectory: () => {
    return ipcRenderer.invoke('select-directory');
  }
});
