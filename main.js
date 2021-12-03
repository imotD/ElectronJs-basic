const { app, BrowserWindow } = require("electron");
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    titleBarStyle: "hiddenInset"
  });

  mainWindow.webContents.openDevTools();
  mainWindow.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
