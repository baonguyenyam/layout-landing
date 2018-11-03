angular.module('formlogin.controller', []).controller("FormloginController", _formloginController)

function _formloginController($scope, $http) {
	$http({
		method: 'GET',
		url: '/db/menu.json'
	}).then(function (response) {
		$scope.data = eval(response.data.menu);
	}, function (error) {
		console.log('Lỗi 001 - Menu: ' + error);
	});
}
