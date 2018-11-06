angular
	.module("alert.controller", [])
	.controller("AlertController", _alertController);

function _alertController($scope, $rootScope) {
	const s3 = new AWS.S3();
	const params = {
		Bucket: s3AWS.bucketRootName,
		MaxKeys: s3AWS.maxKeys,
		Delimiter: s3AWS.delimiter,
		Prefix: s3AWS.prefixes.alert
	};
	$rootScope.baseURL = s3AWS.baseURL;

	s3AWS.loadImages(s3, params)
		.then(data => {
			data.Contents.shift();
			$scope.images = data.Contents;
			$scope.$apply();
			baoNguyenApp.loadIsotope()
		})
		.catch(err => console.log(err));
}
