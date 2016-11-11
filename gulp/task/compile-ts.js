
var gulp = require('gulp');
var ts = require('gulp-typescript');
var dateformat = require('dateformat');
var sourcemaps = require('gulp-sourcemaps');
//var tsProject = ts.createProject('./scripts/tsconfig.json');
var header = require('gulp-header');

module.exports = function (config)
{    //compile-ts will compile all typescript using tsconfig.config


return gulp.task('compile-ts', function() {
	
	  var tsResult = gulp.src('./scripts/**/*.ts')
        .pipe(sourcemaps.init()) // This means sourcemaps will be generated
        .pipe(ts({
			"target": "es5",
			"module": "system",
            "moduleResolution": "node",
			"emitDecoratorMetadata": true,
			"experimentalDecorators": true,
        }));
 var date = dateformat(new Date(), "dd/mm/yyyy HH:mm:ss");
    return tsResult.js
        // You can use other plugins that also support gulp-sourcemaps
		.pipe(header("/*\n\nDeveloped by TDH http://thedevhouse.uk - " + date + "\n\nTeam Asgard - Defenders of the realm \n\tDarren Adams\n\tHebert Godoy\n\tSteven Yates\n\n*/\n\n"))
        .pipe(sourcemaps.write()) // Now the sourcemaps are added to the .js file
		
        .pipe(gulp.dest('./wwwroot/'));
		
});
	
};
