const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const fs = require("fs");

require("electron-reloader")(module);

let mainWindow;
let openedFilePath;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 700,
    titleBarStyle: "hiddenInset",
    webPreferences: {
      preload: path.join(app.getAppPath(), "renderer.js")
    }
  });

  mainWindow.webContents.openDevTools();
  mainWindow.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});

ipcMain.on("open-document-triggered", () => {
  dialog
    .showOpenDialog({
      properties: ["openFile"],
      filters: [
        {
          name: "text files",
          extensions: ["txt"]
        }
      ]
    })
    .then(({ filePaths }) => {
      const filePath = filePaths[0];

      fs.readFile(filePath, "utf8", (error, content) => {
        if (error) {
          console.log("error");
        } else {
          openedFilePath = filePath;
          mainWindow.webContents.send("document-opened", {
            filePath,
            content
          });
        }
      });
    });
});

ipcMain.on("create-document-triggered", () => {
  dialog
    .showSaveDialog(mainWindow, {
      filters: [{ name: "Text Files", extensions: [".txt"] }]
    })
    .then(({ filePath }) => {
      fs.writeFile(filePath, "", error => {
        if (error) {
          console.log("error");
        } else {
          openedFilePath = filePath;
          mainWindow.webContents.send("document-created", filePath);
        }
      });
    });
});

ipcMain.on("file-content-updated", (_, textareaContent) => {
  fs.writeFile(openedFilePath, textareaContent, error => {
    if (error) {
      console.log(error);
    }
  });
});
