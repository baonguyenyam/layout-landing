angular.module('footer.router', []).config(_footerRoute)

function _footerRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('footer', {
			url: '/footer',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'FooterController',
					templateUrl: '/views/footer.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
