var gulp = require('gulp');

module.exports = function (config)
{    //copy-files will copy all files that match the search path in "filesToCopyFromApp"
    return gulp.task('copy-files', function () {

        return gulp.src(config.paths.fileToCopyFromApp, {base: config.paths.appRoot})
            .pipe(gulp.dest(config.paths.wwwRoot));
    })
};

