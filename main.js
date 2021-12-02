const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, Menu, ipcMain } = electron;

//set env
process.env.NODE_ENV = "production";

let mainWindow;
let addWindow;

//  Listen for app to be ready
app.on("ready", function() {
  // create new window
  mainWindow = new BrowserWindow({});
  // load html into window
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "mainWindow.html"),
      protocol: "file:",
      slashes: true
    })
  );
  // Quite app when closed
  mainWindow.on("close", function() {
    app.quit();
  });

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // insert menu
  Menu.setApplicationMenu(mainMenu);
});

// Handle create add window
function createAddWindow() {
  // create new window
  addWindow = new BrowserWindow({
    width: 600,
    height: 200,
    title: "Add Shopping List Item"
  });
  // load html into window
  addWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "addWindow.html"),
      protocol: "file:",
      slashes: true
    })
  );
  // Handle garbage collection
  addWindow.on("close", function() {
    addWindow = null;
  });
}

//catch item:add
ipcMain.on("item:add", function(e, item) {
  console.log(item);
  mainWindow.webContents.send("item:add", item);
  addWindow.close();
});

// create menu template
const mainMenuTemplate = [
  {
    label: "File",
    submenu: [
      {
        label: "Add Item",
        click() {
          createAddWindow();
        }
      },
      {
        label: "Clear Items",
        click() {
          mainWindow.webContents.send("item:clear");
        }
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

// IF mac add empty object to menu
if (process.platform == "darwin") {
  mainMenuTemplate.unshift({});
}

// Add developers tools item if not in prod
if (process.env.NODE_ENV !== "production") {
  mainMenuTemplate.push({
    label: "Developer Tools",
    submenu: [
      {
        label: "Toggle DevTools",
        accelerator: process.platform == "darwin" ? "Command+I" : "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        }
      },
      {
        role: "reload"
      }
    ]
  });
}
