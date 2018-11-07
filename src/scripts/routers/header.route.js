angular.module('header.router', []).config(_headerRoute)

function _headerRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('header', {
			url: '/header',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'HeaderController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
