angular.module('boxes.router', []).config(_boxesRoute)

function _boxesRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('boxes', {
			url: '/boxes',
			data: {
				pageTitle: 'Trang chủ'
			},
			views: {
				"@": {
					controller: 'BoxesController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
