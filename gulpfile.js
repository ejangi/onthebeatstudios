var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
  return gulp.src(["./**/*", "!./.working", "!./node_modules"])
    .pipe(deploy({
        origin: "github",
        remoteUrl: "git@github.com:ejangi/onthebeatstudios.git"
    }))
});