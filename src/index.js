const { ipcRenderer } = require("electron");

const notifyBtn = document.getElementById("notifyBtn");

notifyBtn.addEventListener("click", e => {
  ipcRenderer.send("main:notifyBtn");
});
