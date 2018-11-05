module.exports = function (gulp, $, browserSync) {
	gulp.task('concat-js', function () {
		return gulp.src([
				'bower_components/jquery/dist/jquery.min.js',
				'bower_components/offline/offline.min.js',
				'bower_components/bootstrap/dist/js/bootstrap.bundle.min.js',
				// 'bower_components/owl.carousel/dist/owl.carousel.min.js',
				'bower_components/angular/angular.min.js',
				'bower_components/angular-ui-router/release/angular-ui-router.min.js',
				// 'bower_components/angular-route/angular-route.min.js',
				// 'bower_components/angular-animate/angular-animate.min.js',
				// 'bower_components/angular-sanitize/angular-sanitize.min.js',
				'bower_components/angular-resource/angular-resource.min.js',
				'node_modules/ui-bootstrap4/dist/ui-bootstrap-3.0.5.min.js',
				'node_modules/ui-bootstrap4/dist/ui-bootstrap-tpls-3.0.5.min.js',
				'bower_components/aws-sdk/dist/aws-sdk.min.js',
				// 'bower_components/angular-screenshot/build/angular-screenshot.min.js',
				// 'src/vendor/FileSaver.js',
				// 'src/vendor/grabzit.min.js',
				// 'src/vendor/rasterizeHTML.allinone.js',
				// 'src/vendor/dom-to-image.min.js',
				// 'src/vendor/html2canvas.min.js',
				// 'src/vendor/canvas2image.js',
			])
			.pipe($.concat('addons.js'))
			.pipe(gulp.dest('./dist/js'));
	});
};
