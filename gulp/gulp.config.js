module.exports = function () {
    var config = {

        paths:
        {
            npmSrc: "./node_modules/",
            libTarget: "./wwwroot/libs/",
            appRoot: './scripts/',
            wwwRoot: './wwwroot',
            sourceMapDir: './',
            plugins: './plugins',
            wwwRootTest: './tests',
            sourceMapDirtest: './',
        }
    };

    config.paths.npmLibs = [
        config.paths.npmSrc + '/es6-shim/es6-shim.min.js',
        config.paths.npmSrc + '/es6-shim/es6-shim.map',


        config.paths.npmSrc + '/systemjs/dist/system-polyfills.js',
        config.paths.npmSrc + '/systemjs/dist/system-polyfills.js.map',

        config.paths.npmSrc + '/angular2/bundles/angular2-polyfills.js',
        config.paths.npmSrc + '/angular2/bundles/angular2-polyfills.js.map',
        config.paths.npmSrc + '/angular2/bundles/angular2.dev.js',
        config.paths.npmSrc + '/angular2/bundles/router.dev.js',
        config.paths.npmSrc + '/angular2/bundles/http.dev.js',
        config.paths.npmSrc + '/angular2/bundles/testing.dev.js',
        config.paths.npmSrc + '/angular2-jwt/angular2-jwt.js',

        config.paths.npmSrc + '/systemjs/dist/system.src.js',
        config.paths.npmSrc + '/rxjs/bundles/Rx.js',
        config.paths.npmSrc + '/bootstrap/dist/css/bootstrap.min.css',
        config.paths.npmSrc + '/bootstrap/dist/css/bootstrap.min.css.map',
        config.paths.npmSrc + '/bootstrap/dist/js/bootstrap.min.js',
        config.paths.npmSrc + '/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
        config.paths.npmSrc + '/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2',
        config.paths.npmSrc + '/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',


        config.paths.npmSrc + '/jquery/dist/jquery.min.js',
        config.paths.npmSrc + '/jquery/dist/jquery.min.map',

        config.paths.npmSrc + '/sweetalert/dist/sweetalert.css',
        config.paths.npmSrc + '/sweetalert/dist/sweetalert.min.js',
        config.paths.npmSrc + '/notification/notificationBar.js',
    ];



    config.paths.fileToCopyFromApp = [
        config.paths.appRoot + "**/*.html",
        config.paths.appRoot + "**/*.css",
        config.paths.appRoot + "**/*.json"
    ];
    return config;
};