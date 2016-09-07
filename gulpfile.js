var gulp = require('gulp')
var connect = require('gulp-connect')
var gulpNgConfig = require('gulp-ng-config');
var Environment = process.env.NODE_ENV || 'development';

if (Environment == 'development') {
	gulp.task('connect', function () {
		connect.server({
			root: 'public',
			port: 8875,
			livereload: true,
			fallback: 'public/index.html'
		});

		gulp.task('html', function () {
			gulp.src('./app/*.html')
				.pipe(connect.reload());
		});

		gulp.task('watch', function () {
			gulp.watch(['./app/*.html'], ['html']);
		});
	});
}

    gulp.task('configuration', function () {
	    gulp.src('public/app/config/envConfig.json')
			.pipe(gulpNgConfig('myApp.config', {environment: process.env.NODE_ENV || 'development'}))
		    .pipe(gulp.dest('public/app/config/'));
    });

if (Environment == 'development') {
	gulp.task('default', ['configuration', 'connect']);
}