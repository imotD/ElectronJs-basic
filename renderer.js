const { ipcRenderer } = require("electron");
const path = require("path");

window.addEventListener("DOMContentLoaded", () => {
  const el = {
    documentName: document.getElementById("documentName"),
    createDocumentBtn: document.getElementById("createDocumentBtn"),
    fileTextarea: document.getElementById("fileTextarea"),
    openDocumentBtn: document.getElementById("openDocumentBtn")
  };

  const handleDocumentChange = (filePath, content = "") => {
    el.documentName.innerHTML = path.parse(filePath).base;
    el.fileTextarea.removeAttribute("disabled");
    el.fileTextarea.value = content;
    el.fileTextarea.focus();
  };

  el.openDocumentBtn.addEventListener("click", () => {
    ipcRenderer.send("open-document-triggered");
  });

  ipcRenderer.on("document-opened", (_, { filePath, content }) => {
    handleDocumentChange(filePath, content);
  });

  el.createDocumentBtn.addEventListener("click", () => {
    ipcRenderer.send("create-document-triggered");
  });

  ipcRenderer.on("document-created", (_, filePath) => {
    handleDocumentChange(filePath);
  });
});
