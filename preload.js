const { contextBridge, ipcRenderer } = require("electron");

console.log(process.resourcesPath);
contextBridge.exposeInMainWorld("electron", {
  // Print function
  print: (arg) => ipcRenderer.invoke("print", arg),
});
