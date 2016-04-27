import gulp from "gulp";
import buffer from "vinyl-buffer";
import source from "vinyl-source-stream";
import uglify from "gulp-uglify";
import babelify from "babelify";
import browserify from "browserify";

gulp.task("javascript", () => {
  return browserify("application/js/application.jsx")
    .transform(babelify, {
      ignore  : "vendor/**",
      presets : ["es2015", "react"]
    })
    .bundle()
    .pipe(source("application.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
});
