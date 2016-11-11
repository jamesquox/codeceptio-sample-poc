var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('./gulp/gulp.config.js')();

require('./gulp/task/compile-ts.js')(config);

gulp.task('default', function() {
  return runSequence(
        ['clean'],
        ['compile-ts'],
    ); 
});