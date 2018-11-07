angular.module('testimotional.router', []).config(_testimotionalRoute)

function _testimotionalRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('testimotional', {
			url: '/testimotional',
			data: {
				pageTitle: 'Về chúng tôi'
			},
			views: {
				"@": {
					controller: 'TestimotionalController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
