/* global process */

import gulp from "gulp";
import sequence from "run-sequence";

gulp.task("watch", () => {
  process.env.ELECTRON_ENV = "local";

  return sequence.use(gulp)(
    "clean",
    "copy",
    "install",
    "javascript:watch",
    "electron"
  );
});
