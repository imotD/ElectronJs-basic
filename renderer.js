const { ipcRenderer } = require("electron");
const path = require("path");

window.addEventListener("DOMContentLoaded", () => {
  const el = {
    documentName: document.getElementById("documentName"),
    createDocumentBtn: document.getElementById("createDocumentBtn"),
    fileTextarea: document.getElementById("fileTextarea")
  };

  el.createDocumentBtn.addEventListener("click", () => {
    ipcRenderer.send("create-document-triggered");
  });

  ipcRenderer.on("document-created", (_, filePath) => {
    el.documentName.innerHTML = path.parse(filePath).base;

    el.fileTextarea.removeAttribute("disabled");
    el.fileTextarea.value = "";
    el.fileTextarea.focus();
  });
});
