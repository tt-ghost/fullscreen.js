var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require("gulp-rename");
 
gulp.task('default', function (cb) {
  pump([
        gulp.src('./fullscreen.js'),
        uglify(),
        rename({
          suffix: ".min",
          extname: ".js"
        }),
        gulp.dest('./')
    ],
    cb
  );
});