angular.module('prices.router', []).config(_pricesRoute)

function _pricesRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('prices', {
			url: '/prices',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'PricesController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
