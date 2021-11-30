const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

// * Listen for app to be ready
app.on("ready", function() {
  //* create new window
  mainWindow = new BrowserWindow({});
  //* load html into window
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );
  //* Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  //* insert menu
  Menu.setApplicationMenu(mainMenu);
});

//* create menu template
const mainMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Add Item"
      },
      {
        label: "Clear Items"
      },
      {
        label: "Quit",
        accelerator: process.platform == "darwin" ? "Command+Q" : "Ctrl+Q",
        click() {
          app.quit();
        }
      }
    ]
  }
];
