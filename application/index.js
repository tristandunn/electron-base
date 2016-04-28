"use strict";

const Application   = require("app"),
      BrowserWindow = require("browser-window");

let window = null;

Application.on("ready", () => {
  window = new BrowserWindow({
    "width"  : 800,
    "height" : 600
  });

  window.on("closed", () => {
    window = null;
  });

  window.loadURL(`file://${__dirname}/index.html`);
});

Application.on("window-all-closed", Application.quit);
