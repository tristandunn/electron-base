import gulp from "gulp";
import eslint from "gulp-eslint";
import sasslint from "gulp-sass-lint";
import sequence from "run-sequence";

const sources = [
  "gulpfile.babel.js",
  "application/js/**/*.{js,jsx}",
  "tasks/**/*.js"
];

gulp.task("lint:javascript", () => {
  return gulp.src(sources)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task("lint:stylesheets", () => {
  return gulp.src("application/js/**/*.css")
    .pipe(sasslint())
    .pipe(sasslint.format());
});

gulp.task("lint", (callback) => {
  return sequence.use(gulp)(
    "lint:javascript",
    "lint:stylesheets",
    callback
  );
});
