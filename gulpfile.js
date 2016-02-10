var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
 
gulp.task('build', function () {
    return browserify({
        entries: 'app/js/app.js',
        extensions: ['.jsx'],
        debug: true
    })
    .transform(babelify.configure({presets: ["es2015", "react"]}))
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('compress', function() {
    return gulp.src('./dist/bundle.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function(cb) {
    runSequence('build','compress', cb);
});
