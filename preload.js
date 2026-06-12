const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  getTradingData: () => ipcRenderer.invoke('get-trading-data'),
  executeTrade: (tradeData) => ipcRenderer.invoke('execute-trade', tradeData),
});
