angular.module('banner.router', []).config(_bannerRoute)

function _bannerRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('banner', {
			url: '/banner',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'BannerController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
