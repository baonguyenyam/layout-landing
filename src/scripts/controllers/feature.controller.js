angular.module('feature.controller', []).controller("FeatureController", _featureController)

function _featureController($scope, $rootScope) {
	const s3 = new AWS.S3();
	const params = {
		Bucket: s3AWS.bucketRootName,
		MaxKeys: s3AWS.maxKeys,
		Delimiter: s3AWS.delimiter,
		Prefix: s3AWS.prefixes.feature
	};
	$rootScope.baseURL = s3AWS.baseURL;

	$rootScope.imageCount = 0;
	$rootScope.imagesNumber = 0;

	s3AWS.loadImages(s3, params)
		.then(data => {
			$rootScope.imagesNumber = data.Contents.length - 1;
			data.Contents.shift();
			$scope.images = data.Contents;
			$scope.$apply();
		})
		.catch(err => console.log(err));
}
