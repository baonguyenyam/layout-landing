angular.module('gallery.router', []).config(_galleryRoute)

function _galleryRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('gallery', {
			url: '/gallery',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'GalleryController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
