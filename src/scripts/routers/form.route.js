angular.module('form.router', []).config(_formRoute)

function _formRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('form', {
			url: '/form',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'FormController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
