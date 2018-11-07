angular.module('menu.controller', []).controller("MenuController", _menuController)

function _menuController($scope, $http) {
	$http({
		method: 'GET',
		url: '/db/menu.json'
	}).then(function (response) {
		$scope.menuData = eval(response.data);
	}, function (error) {
		console.log('Lỗi 001 - Menu: ' + error);
	});
}
