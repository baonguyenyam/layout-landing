angular.module('list.router', []).config(_listRoute)

function _listRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('list', {
			url: '/list',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'ListController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
