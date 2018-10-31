angular.module('alert.router', []).config(_alertRoute)

function _alertRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('alert', {
			url: '/alert',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'AlertController',
					templateUrl: '/views/alert.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
