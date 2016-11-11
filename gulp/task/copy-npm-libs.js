var gulp = require('gulp');
 

module.exports = function (config)
{
    //copy-npm-libs will copy all javascript from ./node_modules
  return  gulp.task('copy-npm-libs', function () {
        return gulp.src(config.paths.npmLibs, {base: config.paths.npmSrc})
            .pipe(gulp.dest(config.paths.libTarget));
    });

};
