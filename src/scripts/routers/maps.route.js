angular.module('maps.router', []).config(_mapsRoute)

function _mapsRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('maps', {
			url: '/maps',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'MapsController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
