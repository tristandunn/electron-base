/* global __dirname */

import gulp from "gulp";
import shell from "gulp-shell";
import packageJSON from "../package.json";

gulp.task("zip", () => {
  let name   = packageJSON.name,
      source = `${__dirname}/../release/${name}-darwin-x64`,
      target = `${name}-${packageJSON.version}.zip`;

  return gulp.src("", { read: false })
    .pipe(shell(
      `cd ${source} && zip -r -y ${target} ${name}.app && mv ${target} ../`,
      { quiet: true }
    ));
});
