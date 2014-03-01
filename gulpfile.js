var gulp = require('gulp'),
    karma = require('gulp-karma'),
    gulputil = "gulp-util";

var testFiles = [
    'test/libs/chai.js',
    'test/libs/sinon-1.8.2.js',
    'javascripts/libs/require.js',
    'javascripts/App/main.js',
    'test/App/main-test.coffee',
    'test/**/*.js',
    'test/**/*.coffee'
];


gulp.task('karmawatch', function() {
    gulp.src(testFiles)
        .pipe(karma({
            configFile: 'public/test/karma.conf.js',
            action: 'watch'
        }));
});
