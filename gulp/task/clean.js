var gulp = require('gulp');
var rimraf = require('rimraf');
 
module.exports = function (config)
{
    return  gulp.task('clean', function (cb) {

        return rimraf(config.paths.wwwRoot, cb);
    }); 

};

