angular.module('feature.router', []).config(_featureRoute)

function _featureRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('feature', {
			url: '/',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'FeatureController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
