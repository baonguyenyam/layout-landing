angular.module('navigation.router', []).config(_navigationRoute)

function _navigationRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('navigation', {
			url: '/navigation',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'NavigationController',
					templateUrl: '/views/menu/navigation.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
