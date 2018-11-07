angular.module('product.router', []).config(_productRoute)

function _productRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('product', {
			url: '/product',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'ProductController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
