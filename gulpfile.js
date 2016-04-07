var gulp = require('gulp');
var browserSync = require('browser-sync').create();

function browserSyncInit(baseDir, files) {
    browserSync.instance = browserSync.init(files, {
        server: {
            baseDir: baseDir
        }
    });
};

gulp.task('browser-sync', function() {
    browserSyncInit([
        'app',
        'node_modules',
        'bower_components'
    ], [
        'app/**/*.html',
        'app/**/*.css',
        'app/**/*.ts',
        'app/**/*.js',
        'app/**/*.map'
    ]);
});

gulp.task('default', ['browser-sync']);
