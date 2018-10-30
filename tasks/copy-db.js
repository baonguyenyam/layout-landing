module.exports = function (gulp, $, browserSync) {
	gulp.task('copy-db', function () {
		return gulp.src([
				'./src/data/**.*',
			])
			.pipe(gulp.dest('./dist/data'));
	});
};
