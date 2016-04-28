import gulp from "gulp";
import bundler from "./utilities/bundler";

gulp.task("javascript", () => {
  return bundler.update();
});

gulp.task("javascript:watch", () => {
  return bundler.watch();
});
