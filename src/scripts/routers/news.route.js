angular.module('news.router', []).config(_newsRoute)

function _newsRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('news', {
			url: '/news',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'NewsController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
