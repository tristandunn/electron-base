import gulp from "gulp";

const sources = [
  "application/images/**/*",
  "application/index.js",
  "application/index.html",

  "!application/images/damage.png",
  "!application/images/damage@2x.png"
];

gulp.task("copy", () => {
  return gulp.src(sources, { base: "application" })
    .pipe(gulp.dest("build"));
});
