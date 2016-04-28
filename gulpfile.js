var gulp = require('gulp');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var critical = require('critical');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


gulp.task('jpg', function () {
    return gulp.src('images/*.jpg')
        .pipe(imageminJpegRecompress({loops: 3})())
        .pipe(gulp.dest('dist'));
});

gulp.task('critical', function () {
	critical.generate({
		inline: true,
	    base: 'views/test/',
	    src: 'index.html',
	    dest: 'views/index-critical.html',
	    minify: true,
	    width: 1300,
	    height: 900
	});
});

gulp.task('cssmin', function () {
	return gulp.src('views/css/*.css')
	.pipe(cssmin())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('views/dist'));
});

gulp.task('uglify', function () {
	return gulp.src('views/js/*.js')
	.pipe(uglify())
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('views/dist'))
});

gulp.task('concat', function () {
	return gulp.src('views/dist/*.js')
	.pipe(concat('all.min.js'))
	.pipe(gulp.dest('views/dist'))
});