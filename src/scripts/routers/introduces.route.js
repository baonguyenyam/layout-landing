angular.module('introduces.router', []).config(_introducesRoute)

function _introducesRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('introduces', {
			url: '/introduces',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'IntroducesController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
