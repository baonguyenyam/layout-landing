angular.module('services.router', []).config(_servicesRoute)

function _servicesRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('services', {
			url: '/services',
			data: {
				pageTitle: 'Về chúng tôi'
			},
			views: {
				"@": {
					controller: 'ServicesController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
