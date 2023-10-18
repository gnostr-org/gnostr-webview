// Electron
const { app, Menu } = require("electron");
const { EventEmitter } = require("events").EventEmitter.defaultMaxListeners = Infinity;

app.whenReady().then(() => {

  process.stdout.write('your output to command prompt console or node js\n');
  process.stdout.write('\n');

  console.log("process.defaultApp=" + process.defaultApp);
  console.log("process.isMainFrame=" + process.isMainFrame);
  console.log("process.mas=" + process.mas);
  console.log("process.resourcePath=" + process.resourcePath);
  console.log("process.sandboxed=" + process.sandboxed);
  // Main window
  const window = require("./src/window");
  mainWindow = window.createBrowserWindow(app);

  // Option 1: Uses Webtag and load a custom html file with external content
  mainWindow.loadFile("index.html");
  // mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Option 2: Load directly an URL if you don't need interface customization
  //mainWindow.loadURL("https://github.com");

  // Option 3: Uses BrowserView to load an URL
  //const view = require("./src/view");
  //view.createBrowserView(mainWindow);

  // Display Dev Tools
  //mainWindow.openDevTools();

  // Menu (for standard keyboard shortcuts)
  const menu = require("./src/menu");
  // if (process.argv[1] !== '--dev') return console.log("process.argv[1]",process.argv[1]);
  // if (process.argv[2] !== '--dev') return console.log("process.argv[2]",process.argv[2]);
  menu.append(new MenuItem({
    label: 'MenuCommand',
    accelerator: 'CommandOrControl+Shift+Z',
    click: () => BrowserWindow.getFocusedWindow().toggleDevTools()
  }));
  const template = menu.createTemplate(app.name);
  const builtMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(builtMenu);

  // Print function (if enabled)
  require("./src/print");
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
