angular.module('about.router', []).config(_aboutRoute)

function _aboutRoute($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
	$stateProvider
		.state('about', {
			url: '/',
			data: {
				pageTitle: 'Về chúng tôi'
			},
			views: {
				"@": {
					controller: 'AboutController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});

	$urlRouterProvider.otherwise('/');
	$urlMatcherFactoryProvider.caseInsensitive(true);
}
