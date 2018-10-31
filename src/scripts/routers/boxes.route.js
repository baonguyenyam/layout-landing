angular.module('boxes.router', []).config(_boxesRoute)

function _boxesRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('boxes', {
			url: '/boxes',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'BoxesController',
					templateUrl: '/views/boxes.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
