import css from "css-modulesify";
import csso from "gulp-csso";
import gulp from "gulp";
import buffer from "vinyl-buffer";
import source from "vinyl-source-stream";
import uglify from "gulp-uglify";
import babelify from "babelify";
import watchify from "watchify";
import browserify from "browserify";
import synchronize from "browser-sync";

class Bundler {
  constructor() {
    this.instance = browserify("application/js/application.jsx", watchify.args)
      .plugin(css)
      .transform(babelify, {
        ignore  : "vendor/**",
        presets : ["es2015", "react"]
      })
      .on("css stream", (css) => {
        css.pipe(source("application.css"))
           .pipe(buffer())
           .pipe(csso())
           .pipe(gulp.dest("build/css"));
      });
  }

  static watch() {
    return new Bundler().watch().update();
  }

  static update() {
    return new Bundler().update();
  }

  watch() {
    this.browser = synchronize.create();
    this.browser.init({
      logLevel : "silent",
      notify   : false,
      socket   : {
        domain : "http://localhost:3000"
      }
    });

    this.instance
      .plugin(watchify)
      .on("update", this.update.bind(this));

    return this;
  }

  update() {
    let result = this.instance.bundle()
      .pipe(source("application.js"));

    if (this.browser) {
      return result.pipe(this.browser.stream())
        .pipe(gulp.dest("build/js"));
    } else {
      return result.pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest("build/js"));
    }
  }
}

export default Bundler;
