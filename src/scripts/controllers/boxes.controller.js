angular.module('boxes.controller', []).controller("BoxesController", _boxesController)

function _boxesController($scope, $rootScope) {
	const s3 = new AWS.S3();
	const params = {
		Bucket: s3AWS.bucketRootName,
		MaxKeys: s3AWS.maxKeys,
		Delimiter: s3AWS.delimiter,
		Prefix: s3AWS.prefixes.boxes
	};
	$rootScope.baseURL = s3AWS.baseURL;

	$scope.imageCount = 0;
	$scope.imagesNumber = 0;
	$scope.timingImage = () => {
		$scope.imageCount += 1;
		console.log($scope.imageCount, $scope.imagesNumber)
		if ($scope.imageCount < $scope.imagesNumber) {
			$("#loading").removeClass("done").removeClass("finished")
		} else {
			setTimeout(() => {
				$("#loading").addClass("done")
			}, 1), setTimeout(() => {
				$("#loading").removeClass("done").addClass("finished")
			}, 1)
			baoNguyenApp.loadIsotope();
			let isotopeContainer = new Isotope('.portfolioContainer');
			isotopeContainer.shuffle();
		}

	}
	s3AWS.loadImages(s3, params)
		.then(data => {
			$scope.imagesNumber = data.Contents.length - 1;
			console.log($scope.imagesNumber)
			data.Contents.shift();
			$scope.images = data.Contents;
			$scope.$apply();
		})
		.catch(err => console.log(err));
}
