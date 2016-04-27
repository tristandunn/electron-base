/* global __dirname,process,require */
/* eslint no-console: 0 */

import gulp from "gulp";
import shell from "gulp-shell";
import packageJSON from "../package.json";
import { colors, log } from "gulp-util";

gulp.task("sign", () => {
  require("dotenv").config({ silent: true });

  let developer = process.env.DEVELOPER_NAME;

  if (!developer) {
    log("Skipping '%s'. %s",
        colors.cyan("sign"),
        "Set the DEVELOPER_NAME variable to sign the application.");

    return false;
  }

  let name = packageJSON.name,
      path = `${__dirname}/../release/${name}-darwin-x64/${name}.app`;

  return gulp.src("", { read: false })
    .pipe(shell(`codesign --deep --force --verbose --sign "${developer}" ${path}`));
});
