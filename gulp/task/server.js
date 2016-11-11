var gulp = require('gulp');
var gls = require('gulp-live-server');
var gutil = require('gulp-util');

var runSequence = require('run-sequence');

module.exports = function (config)
{
    var server = gls.static(config.paths.wwwRoot, 3000);


    return gulp.task('server', function () {

        if(gutil.env.local){
            server.start();
            gulp.watch(config.paths.appRoot + '**/*.ts', ['compile-ts']).on('change', notifyReload);
            gulp.watch([config.paths.appRoot + '**/*.css', config.paths.appRoot + '**/*.html', config.paths.appRoot + '**/*.json'], ['copy-files']).on('change', notifyReload);
            gulp.watch(config.paths.appRoot + 'index.html', ['copy-libs']).on('change', notifyReload);

        }
    });


    function notifyReload(file) {
        setTimeout(function () {
            server.notify.apply(server, [file]);
        }, 1000);

    }

};

