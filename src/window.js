const path = require("path");
const { BrowserWindow } = require("electron"); // https://www.electronjs.org/docs/api/browser-window

exports.createBrowserWindow = () => {
  // https://www.electronjs.org/docs/api/browser-window#class-browserwindow
  return new BrowserWindow({
    width: 1024,
    height: 768,
    icon: path.join(__dirname, "assets/icons/png/64x64.png"),
    //titleBarStyle: 'hidden',
    //frame: false,
    backgroundColor: "#fff",
    parent: "top",
    webPreferences: {
      nativeWindowOpen: true,
      devTools: true, // false if you want to remove dev tools access for the user
      contextIsolation: true,
      webviewTag: true, // https://www.electronjs.org/docs/api/webview-tag,
      preload: path.join(__dirname, "../preload.js"), // required for print function
    },
  });
};
