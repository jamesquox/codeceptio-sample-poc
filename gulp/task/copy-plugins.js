var gulp = require('gulp');
 

module.exports = function (config)
{    //copy-plugins will copy all javascrit from ./plugins
    return  gulp.task('copy-plugins', function () {
        var p = [config.paths.plugins + "/**/*.*"]
        return gulp.src(p, {base: config.paths.plugins})

            .pipe(gulp.dest(config.paths.libTarget));
    })
};

