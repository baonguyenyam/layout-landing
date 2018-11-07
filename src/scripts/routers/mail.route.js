angular.module('mail.router', []).config(_mailRoute)

function _mailRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('mail', {
			url: '/mail',
			data : { 
				pageTitle: 'Về chúng tôi' 
			},
			views: {
				"@": {
					controller: 'MailController',
					templateUrl: '/views/content.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
