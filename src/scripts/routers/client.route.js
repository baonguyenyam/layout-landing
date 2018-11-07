angular.module('client.router', []).config(_clientRoute)

function _clientRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('client', {
			url: '/client',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'ClientController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
