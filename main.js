// main.js

// Modules to control application life and create native browser window
const {
  app,
  BrowserWindow,
  Menu,
  shell,
  ipcMain,
  remote,
  ipcRenderer,
  Notification
} = require("electron");
const path = require("path");

let mainWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,

    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
      // preload: path.join(__dirname, "./src/index.html")
    }
  });

  // and load the index.html of the app.
  mainWindow.loadFile("./src/index.html");

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  let menu = Menu.buildFromTemplate([
    {
      label: "Menu",
      submenu: [
        { label: "Adjust Notification Value" },
        {
          label: "CoinMarketCap",
          click() {
            shell.openExternal("https://github.com");
          }
        },
        { type: "separator" },
        { role: "reload" },
        { role: "quit" }
      ]
    },
    { label: "Info" }
  ]);
  Menu.setApplicationMenu(menu);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

ipcMain.on("main:notifyBtn", () => {
  const modalPath = path.join("file://", __dirname, "./src/add.html");
  let win = new BrowserWindow({
    width: 400,
    height: 200,
    alwaysOnTop: true,
    // frame: false
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // win.webContents.openDevTools();

  win.on("close", function() {
    win = null;
  });
  win.loadURL(modalPath);
  win.show();
});

ipcMain.on("add:closeBtn", () => {
  var window = BrowserWindow.getFocusedWindow();
  window.close();
});

// ipcMain.on("notifUpdate", () => {
//   const notification = {
//     title: "BTC Alert",
//     body: "BTC just beat your target price!"
//   };

//   new Notification({
//     title: notification.title,
//     body: notification.body
//   }).show();
// });

ipcMain.on("update-notify-value", (event, arg) => {
  mainWindow.webContents.send("targetPriceVal", arg);

  var window = BrowserWindow.getFocusedWindow();
  window.close();
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
