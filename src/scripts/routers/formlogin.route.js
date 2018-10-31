angular.module('formlogin.router', []).config(_formloginRoute)

function _formloginRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('formlogin', {
			url: '/formlogin',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'FormloginController',
					templateUrl: '/views/formlogin.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
