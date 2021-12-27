const { ipcRenderer } = require("electron");

const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", e => {
  ipcRenderer.send("add:closeBtn");
});
