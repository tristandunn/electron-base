/* global __dirname,process */

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
  process.env.NODE_ENV = "production";

  return sequence.use(gulp)(
    "clean",
    "copy",
    ["install", "javascript"],
    "package",
    "sign",
    ["zip", "damage"],
    callback
  );
});
