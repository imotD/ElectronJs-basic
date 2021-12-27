const { ipcRenderer } = require("electron");

const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener("click", e => {
  ipcRenderer.send("add:closeBtn");
});

const updateBtn = document.getElementById("updateBtn");
updateBtn.addEventListener("click", () => {
  ipcRenderer.send(
    "update-notify-value",
    document.getElementById("notifyVal").value
  );
});
