/* global __dirname */

import gulp from "gulp";
import damage from "appdmg";
import packageJSON from "../package.json";

gulp.task("damage", (callback) => {
  let name      = packageJSON.name,
      processor = damage({
        "target"        : `release/${name}-${packageJSON.version}.dmg`,
        "basepath"      : `${__dirname}/../`,
        "specification" : {
          "title"      : name,
          "icon"       : "application/images/icon.icns",
          "icon-size"  : 80,
          "background" : "application/images/damage.png",
          "contents"   : [
            { "x": 481, "y": 247, "type": "link", "path": "/Applications" },
            { "x": 160, "y": 247, "type": "file", "path": `release/${name}-darwin-x64/${name}.app` }
          ]
        }
      });

  processor.on("error", callback);
  processor.on("finish", callback);
});
