angular.module('slider.router', []).config(_sliderRoute)

function _sliderRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('slider', {
			url: '/slider',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'SliderController',
					templateUrl: '/views/pages/slider.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
