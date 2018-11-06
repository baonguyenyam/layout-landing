angular.module('contact.router', []).config(_contactRoute)

function _contactRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('contact', {
			url: '/contact',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'ContactController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
