/* global __dirname */

import gulp from "gulp";
import packager from "electron-packager";
import sequence from "run-sequence";
import packageJSON from "../package.json";

gulp.task("package", (callback) => {
  let dependencies = packageJSON.devDependencies;

  packager({
    asar     : true,
    arch     : "x64",
    dir      : "build",
    out      : "release",
    platform : "darwin",
    version  : dependencies["electron-prebuilt"],

    "name"        : packageJSON.name,
    "icon"        : `${__dirname}/../application/images/icon.icns`,
    "osx-sign"    : false,
    "app-version" : packageJSON.version
  }, callback);
});

gulp.task("release", (callback) => {
  return sequence.use(gulp)(
    "clean",
    "copy",
    "install",
    ["javascript", "stylesheet"],
    "package",
    "sign",
    ["zip", "damage"],
    callback
  );
});
