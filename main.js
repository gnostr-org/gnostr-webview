const {app, BrowserWindow, ipcMain, Menu} = require('electron')
const child_process = require('child_process').execFile;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {

    // Create the browser window.
    win = new BrowserWindow({width: 800, height: 600})

    // and load the index.html of the app.
    win.loadFile('index.html')

    // Open the DevTools.
    // win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })
}

function bashit_fn(sender, fnName) {
    var executablePath = '/usr/bin/env'
    var source_path = 'source ' + __dirname + '/bash_src/lib.sh; ' + fnName;
    var parameters = [ 'bash', '-c', source_path ];

    child_process(executablePath, parameters, function(err, data) {
        var msg = data.toString();
        if (err) {
            console.error(err);
            msg += err;
        }
        var eventName = 'bash-function-' + fnName;
        sender.send(eventName, msg);
        console.log(msg);
    });
}

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
function onwindow_fn(sender) {
    bashit_fn(sender, 'onwindow_fn');
}
ipcMain.on('call-bash-function-window_fn', (event, arg) => {
    onwindow_fn(event.sender);
});
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
function onbody_fn(sender) {
    bashit_fn(sender, 'onbody_fn');
}
ipcMain.on('call-bash-function-onbody_fn', (event, arg) => {
    onbody_fn(event.sender);
});
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
function hello_fn(sender) {
    bashit_fn(sender, 'hello_fn');
}
ipcMain.on('call-bash-function-hello_fn', (event, arg) => {
    hello_fn(event.sender);
});
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
function hello_fn2(sender) {
    bashit_fn(sender, 'hello_fn2');
}
ipcMain.on('call-bash-function-hello_fn2', (event, arg) => {
    hello_fn2(event.sender);
});
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
ipcMain.on("print", async (event, arg) => {
  let printWindow = new BrowserWindow({ "auto-hide-menu-bar": true });
  let instaweb = "http://127.0.0.1:1234";
  printWindow.loadURL(instaweb);

  printWindow.webContents.on("did-finish-load", () => {
    // repurpose the print button for now
    // printWindow.webContents.print();
  });
});
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.

app.on('ready', createWindow)
// app.on('ready', hello_fn2("app.on"))

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})

