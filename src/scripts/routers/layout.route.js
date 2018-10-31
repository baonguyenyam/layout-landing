angular.module('layout.router', []).config(_layoutRoute)

function _layoutRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('layout', {
			url: '/layout',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'LayoutController',
					templateUrl: '/views/layout.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
