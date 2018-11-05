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

	const loadImages = () => {
		return new Promise((resolve, reject) => {
			s3.listObjectsV2(params, (err, data) => {
				if (err) {
					// an error occurred
					reject(err);
				} else {
					// successful response
					resolve(data);
				}
			});
		});
	};

	loadImages()
		.then(data => {
			console.log(data.Contents);
			data.Contents.shift();
			$scope.images = data.Contents;
			$scope.$apply();
		})
		.catch(err => console.log(err));
}
