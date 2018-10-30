module.exports = function (gulp, $, browserSync) {
	gulp.task('copy-uploads', function () {
		return gulp.src([
				'./src/uploads/**.*',
			])
			.pipe(gulp.dest('./dist/uploads'));
	});
};
