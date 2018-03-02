var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('browser-sync', ['sass'], function() {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	});

	gulp.watch('src/*.html').on('change', browserSync.reload);
	gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
	return gulp.src('src/scss/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 3 versions']
	}))
	.pipe(gulp.dest('src/css'))
	.pipe(browserSync.stream())
})

gulp.task('default', ['browser-sync']);